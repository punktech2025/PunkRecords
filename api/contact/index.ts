import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting setup
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // Maximum requests per IP per hour

// In-memory store for rate limiting (replace with Redis in production)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
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
        await resend.emails.send({
            from: "Punk Records <contact@punktech.in>",
            to: ["Vansh.Rajak@punktech.in"],
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            // Add reply-to so you can reply directly to the sender
            reply_to: email
        });

        context.res = {
            status: 200,
            body: { message: "Message sent successfully" }
        };
    } catch (error) {
        context.log.error("Error processing contact form:", error);
        context.res = {
            status: 500,
            body: { error: "Failed to send message. Please try again later." }
        };
    }
};

export default httpTrigger;
