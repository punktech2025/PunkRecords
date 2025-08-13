Got it — you're asking for a **complete technical specification**, fully broken down for a **junior developer**, including code snippets and detailed logic explanation, for your premium dark-themed website using:

* **Vite.js**, **React**, **TypeScript**
* **TailwindCSS**, **Framer Motion**, **React Helmet** (for SEO)
* **Resend API** (for contact)
* **Dynamic image support**
* **Responsive and adaptive design**
* **Separate pages for services**
* **Director avatars**
* **Luxury-grade texture and animations**

Let’s do this step-by-step.

---

# 🧠 FULL TECHNICAL SPECIFICATION (EXPLAINED IN DETAIL)

---

## 🚀 1. **PROJECT SETUP**

### ✅ Install Required Tools

Open terminal and run:

```bash
npm create vite@latest my-lux-site --template react-ts
cd my-lux-site
npm install
```

Install necessary packages:

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add plugins:

```bash
npm install framer-motion react-router-dom react-helmet-async react-hook-form zod @heroicons/react @resend/client
```

### ✅ Configure Tailwind (`tailwind.config.js`)

```ts
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        darkSky: "#0f172a",
        darkPink: "#3f2b47",
        luxuryPurple: "#a855f7",
        accentPink: "#d946ef",
        skyBlue: "#38bdf8",
      },
      backgroundImage: {
        texture: "url('/textures/noise.png')",
        gradient: "linear-gradient(to right, #0f172a, #3f2b47)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

---

## 🔧 2. **PROJECT STRUCTURE**

```bash
/src
  /assets         # Images, Textures
  /components     # Reusable UI (Navbar, Footer, ServiceCard, etc.)
  /pages          # Individual route pages
    Home.tsx
    Contact.tsx
    services/
      VideoEditing.tsx
      VideoPhoto.tsx
      Music.tsx
      Web.tsx
      Social.tsx
  /routes         # React Router setup
  /lib            # Resend API helper, SEO
  App.tsx
  main.tsx
```

---

## 🛠 3. **ROUTING SETUP**

### 🧩 Add React Router

```tsx
// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import VideoEditing from "../pages/services/VideoEditing";
import VideoPhoto from "../pages/services/VideoPhoto";
import Music from "../pages/services/Music";
import Web from "../pages/services/Web";
import Social from "../pages/services/Social";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services/video-editing", element: <VideoEditing /> },
  { path: "/services/video-photo", element: <VideoPhoto /> },
  { path: "/services/music", element: <Music /> },
  { path: "/services/web", element: <Web /> },
  { path: "/services/social", element: <Social /> },
]);
```

### ✨ Wrap in `RouterProvider`

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

---

## 🧱 4. **LAYOUT COMPONENTS**

### ✅ Navbar

```tsx
// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between p-4 shadow-lg">
      <Link to="/" className="text-luxuryPurple font-bold text-xl">LuxSite</Link>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
```

### ✅ Footer

```tsx
// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-center text-white py-4 text-sm">
      © {new Date().getFullYear()} LuxSite. All Rights Reserved.
    </footer>
  );
}
```

---

## 🎨 5. **HOME PAGE (Landing)**

### ✅ File: `src/pages/Home.tsx`

```tsx
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div className="bg-black text-white bg-texture">
      <Helmet>
        <title>Welcome to LuxSite - Premium Services</title>
        <meta name="description" content="Explore our high-end media & tech services." />
      </Helmet>
      <section className="text-center py-16 bg-gradient">
        <h1 className="text-5xl font-bold text-luxuryPurple">Your Creative Universe</h1>
        <p className="text-skyBlue mt-4">Video, Music, Web & More</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <ServiceCard title="Editing & Design" to="/services/video-editing" />
        <ServiceCard title="Video & Photography" to="/services/video-photo" />
        <ServiceCard title="Music Production" to="/services/music" />
        <ServiceCard title="Web Development" to="/services/web" />
        <ServiceCard title="Social Marketing" to="/services/social" />
      </section>
    </div>
  );
}
```

### ✅ Reusable `ServiceCard` Component

```tsx
// src/components/ServiceCard.tsx
import { Link } from "react-router-dom";

export default function ServiceCard({ title, to }: { title: string; to: string }) {
  return (
    <Link to={to} className="bg-darkSky p-6 rounded-lg hover:bg-darkPink transition-all">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-skyBlue mt-2">Explore more →</p>
    </Link>
  );
}
```

---

## 🧠 6. **SERVICE PAGES**

Each service has its own file:

### Example: `VideoEditing.tsx`

```tsx
import { Helmet } from "react-helmet-async";

export default function VideoEditing() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <Helmet>
        <title>Video & Photo Editing | LuxSite</title>
        <meta name="description" content="Professional video and graphic design services." />
      </Helmet>

      <h1 className="text-3xl font-bold text-luxuryPurple mb-4">Video & Photo Editing</h1>
      <p className="text-lg text-white mb-8">
        We specialize in cinematic video editing, photo manipulation, and full-scale graphic design using Adobe Suite and more.
      </p>

      <img src="/assets/placeholders/editing-placeholder.jpg" alt="Editing Sample" className="rounded shadow-lg w-full max-w-3xl" />
    </div>
  );
}
```

Create similar pages for each service with relevant text and placeholder image.

---

## 📩 7. **CONTACT PAGE**

### ✅ Contact Form with Resend API

```tsx
// src/pages/Contact.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet-async";
import { sendContactEmail } from "../lib/resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export default function Contact() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await sendContactEmail(data);
    alert("Email sent!");
    reset();
  };

  return (
    <div className="bg-black text-white p-8">
      <Helmet>
        <title>Contact Us | LuxSite</title>
        <meta name="description" content="Get in touch with our creative directors." />
      </Helmet>

      <h1 className="text-luxuryPurple text-3xl font-bold mb-4">Get in Touch</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
        <input {...register("name")} placeholder="Your Name" className="p-
```


3 w-full bg-darkSky text-white" />
\<input {...register("email")} placeholder="Your Email" className="p-3 w-full bg-darkSky text-white" />
\<textarea {...register("message")} placeholder="Message" rows={5} className="p-3 w-full bg-darkSky text-white" /> <button type="submit" className="bg-luxuryPurple px-6 py-2 text-black font-bold rounded">Send</button> </form>

```
  <section className="mt-12">
    <h2 className="text-2xl font-bold text-skyBlue mb-4">Our Directors</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Avatar cards */}
      <div className="bg-darkPink p-4 rounded shadow">Yuvi Sahib – Creative Director 1</div>
      <div className="bg-darkPink p-4 rounded shadow">Nahash Michael – Creative Director 2</div>
      <div className="bg-darkPink p-4 rounded shadow">Sahil Singh – Creative Director 3</div>
    </div>
  </section>
</div>
```

);
}

````

### 🔐 Resend API helper

```ts
// src/lib/resend.ts
import { Resend } from "@resend/client";

const resend = new Resend(import.meta.env.VITE_RESEND_KEY);

export async function sendContactEmail({ name, email, message }: any) {
  await resend.emails.send({
    from: "site@luxsite.com",
    to: "admin@luxsite.com",
    subject: "New Contact",
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  });
}
````

Add to `.env`:

```
VITE_RESEND_KEY=your_resend_api_key
```

---

## 📱 8. **RESPONSIVENESS & DYNAMIC IMAGES**

Use `tailwind` responsive classes:

```tsx
<img src="/assets/sample.jpg" className="w-full md:w-1/2 rounded" />
```

Install `vite-imagetools` for advanced responsive images because we will need it

---

## 🔍 9. **SEO with React Helmet**

Already used in each page:

```tsx
<Helmet>
  <title>Page Title</title>
  <meta name="description" content="Page description." />
</Helmet>
```

Set Open Graph, Twitter, etc. as needed.

---

## 📦 10. **DEPLOYMENT**

Use **Vercel** or **Netlify**. Just import GitHub repo and it builds automatically with Vite.

---

## ✅ CONCLUSION

You've now got a **full breakdown** of:

* Setup
* Routing
* Pages
* Styling
* Contact logic with Resend
* SEO
* Responsive layout
* Folder structure

---

Would you like me to **generate the full repo or codebase** you can clone and build from? I can also walk you through building this one component at a time.
