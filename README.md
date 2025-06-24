# Qlever Next SaaS Template

A modern, full-featured SaaS boilerplate built with Next.js, React, TypeScript, Tailwind CSS, and PostgreSQL. This template provides a solid foundation for building production-ready SaaS applications with best practices and modern tools.

## 📚 Technology Stack

### Frontend

- **Framework**: [Next.js 15.3.4](https://nextjs.org/) with App Router & Server Components
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**:
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [tw-animate-css](https://github.com/bentzibentz/tailwindcss-animate)
  - [Shadcn UI components](https://ui.shadcn.com/) (Accessible UI components built with Radix UI and Tailwind)
- **Fonts**: Geist Sans & Mono via `next/font/google`
- **Theme**: Dark/Light mode support via [next-themes](https://github.com/pacocoursey/next-themes)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) toast library

### Backend

- **API**: Next.js App Router (with Server Actions for mutations and API routes)
- **Database ORM**: [Prisma 6](https://www.prisma.io/) with [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate)
- **Database**: PostgreSQL
- **Authentication**: [BetterAuth](https://github.com/wemilabs/better-auth)
- **Validation**: [Zod](https://zod.dev/)

### Development Tools

- **Package Manager**: [pnpm](https://pnpm.io/)
- **Bundler**: [Turbopack](https://turbo.build/pack) (via Next.js)
- **Linting**: ESLint

## ✨ Features

- 🔒 **Authentication System** - Complete auth flow with BetterAuth including sign-in, sign-up, password reset, and email verification
- 🎨 **Modern UI** - Clean, responsive UI built with Tailwind CSS and Shadcn UI components
- 🌙 **Dark Mode** - Full dark mode support with persistent theme selection
- 🔍 **SEO Ready** - Complete metadata configuration with Open Graph and Twitter card support
- 📱 **Responsive Design** - Mobile-first design approach that works on all devices
- 🚀 **Performance Optimized** - Built with performance in mind, using Turbopack for fast builds
- 🧩 **Modular Architecture** - Well-structured components and pages for easy customization
- 📊 **Dashboard** - Ready-to-use dashboard layout with protected routes
- 📝 **Legal Pages** - Pre-built templates for privacy policy and terms of service
- 📨 **Newsletter** - Newsletter subscription component
- 💰 **Pricing** - Pricing section for your SaaS products
- ❓ **FAQ** - Frequently asked questions section
- 🏢 **Used By** - Social proof section to showcase your customers
- 📑 **Features Section** - Highlight your product's key features

## 🗂️ Project Structure

```
qlever-next-saas-template/
├── app/                   # Next.js App Router directory
│   ├── @auth/             # Auth-related parallel routes
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages (protected)
│   ├── legal/             # Legal pages (privacy, terms)
│   ├── sign-in/           # Sign-in page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── dashboard/         # Dashboard-specific components
│   ├── forms/             # Form components
│   ├── home/              # Landing page components
│   │   ├── faq.tsx
│   │   ├── features.tsx
│   │   ├── hero.tsx
│   │   ├── newsletter.tsx
│   │   ├── pricing.tsx
│   │   └── used-by.tsx
│   ├── layout/            # Layout components (header, footer, etc.)
│   ├── providers/         # Context providers
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions and hooks
│   └── generated/         # Generated files (Prisma client)
├── prisma/                # Prisma schema and migrations
│   └── schema.prisma      # Database schema
├── public/                # Static assets
├── .env                   # Environment variables
├── .env.example           # Example environment variables
├── components.json        # Shadcn UI configuration
├── middleware.ts          # Next.js middleware (auth protection)
├── next.config.ts         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v8 or newer)
- PostgreSQL database (or Neon.tech account)

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/wemilabs/qlever-next-saas-template.git
   cd qlever-next-saas-template
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up your environment variables:**
   Copy the `.env.example` file to `.env` and fill in your values:

   ```bash
   cp .env.example .env
   ```

   Update the `DATABASE_URL` with your PostgreSQL connection string.

4. **Generate the Prisma client:**

   ```bash
   pnpm exec prisma generate
   ```

5. **Start the development server:**

   ```bash
   pnpm dev
   ```

6. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Development

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint to check code quality

### Adding New Components

This template uses Shadcn UI components. To add a new component:

```bash
pnpm dlx shadcn@latest add <component-name>
```

Then import the component in your project:

```tsx
import { ComponentName } from "@/components/ui/component-name";
```

## 🔒 Authentication

Authentication is handled by BetterAuth, with protected routes configured in `middleware.ts`. The dashboard is protected by default and requires authentication.

## 🌐 Deployment

The template is optimized for deployment on Vercel, but can be deployed to any platform that supports Next.js applications.

### Deploying to Vercel

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import the project into Vercel
3. Set environment variables in the Vercel dashboard
4. Deploy

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ♥ by [cuttypie](https://cuttypiedev.vercel.app/)
