import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Resend } from "resend";

interface ResendResponse {
    data: { id: string } | null;
    error: { message: string; name?: string; statusCode?: number } | null;
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting setup
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // Maximum requests per IP per hour

// In-memory store for rate limiting (replace with Redis in production)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
        context.res = {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, x-functions-key"
            }
        };
        return;
    }
    try {
        // Get client IP
        const clientIP = req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || "unknown";

        // Check rate limit
        const now = Date.now();
        const rateLimit = rateLimitStore.get(clientIP as string);
        
        if (rateLimit) {
            if (now - rateLimit.timestamp < RATE_LIMIT_WINDOW) {
                if (rateLimit.count >= MAX_REQUESTS) {
                    context.res = {
                        status: 429,
                        body: { error: "Too many requests. Please try again later." }
                    };
                    return;
                }
                rateLimitStore.set(clientIP as string, {
                    count: rateLimit.count + 1,
                    timestamp: rateLimit.timestamp
                });
            } else {
                rateLimitStore.set(clientIP as string, {
                    count: 1,
                    timestamp: now
                });
            }
        } else {
            rateLimitStore.set(clientIP as string, {
                count: 1,
                timestamp: now
            });
        }

        // Validate request body
        const { name, email, message } = req.body;
        
        if (!name || !email || !message) {
            context.res = {
                status: 400,
                body: { error: "Name, email, and message are required" }
            };
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            context.res = {
                status: 400,
                body: { error: "Invalid email format" }
            };
            return;
        }

        // Send email using Resend
        if (!process.env.RESEND_API_KEY) {
            throw new Error("RESEND_API_KEY environment variable is not configured");
        }

        try {
            const timestamp = new Date().toISOString();
            const userAgent = req.headers["user-agent"] || "Unknown";
            
            // Format email content to match your preferred format
            const emailContent = `Contact Form Submission
Contact Information
Name: ${name}

Email: ${email}

Message
${message}

Submission Details:
Time: ${timestamp}
IP: ${clientIP}
User Agent: ${userAgent}`;

            const emailResult = await resend.emails.send({
                from: "Punk Records <contact@punktech.in>",
                to: ["Vansh.Rajak@punktech.in"],
                subject: `New Contact Form Submission`,
                text: emailContent,
                reply_to: email
            }) as unknown as ResendResponse;
            
            if (emailResult.error) {
                throw new Error(emailResult.error.message);
            }
            
            if (!emailResult.data?.id) {
                throw new Error("No email ID returned from Resend");
            }
            
            // Log the success with the email ID
            context.log.info("Email sent successfully with ID:", emailResult.data.id);
        } catch (emailError) {
            // Log detailed error information
            const error = emailError as Error;
            context.log.error("Failed to send email:", {
                message: error.message,
                name: error.name,
                stack: error.stack
            });
            throw error;
        }

        context.res = {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, x-functions-key"
            },
            body: { message: "Message sent successfully" }
        };
    } catch (err) {
        const error = err as Error;
        context.log.error("Error processing contact form:", error);
        // Check if it's a known error type
        if (error.message === "RESEND_API_KEY environment variable is not configured") {
            context.res = {
                status: 500,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, x-functions-key"
                },
                body: { error: "Email service configuration error. Please contact support." }
            };
        } else {
            context.res = {
                status: 500,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, x-functions-key"
                },
                body: { error: "Failed to send message. Please try again later." }
            };
        }
    }
};

export default httpTrigger;
