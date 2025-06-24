import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next-gen SaaS App | Qlever.next",
  description: "Next-gen SaaS App built with Next.js and Tailwind CSS",
  metadataBase: new URL("https://qlever-next.vercel.app/"),
  keywords: ["qlever-next", "cuttypie"],
  authors: [
    {
      name: "cuttypie",
      url: "https://cuttypiedev.vercel.app/",
    },
  ],
  creator: "cuttypie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qlever-next.vercel.app/",
    title: "Next-gen SaaS App | Qlever.next",
    description: "Next-gen SaaS App built with Next.js and Tailwind CSS",
    siteName: "Next-gen SaaS App | Qlever.next",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Qlever.next",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next-gen SaaS App | Qlever.next",
    description: "Next-gen SaaS App built with Next.js and Tailwind CSS",
    images: [""],
    creator: "@DorianTho5",
  },
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth?: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {auth}
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
