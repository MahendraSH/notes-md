import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "@/lib/config/site-config";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import UpButton from "@/components/up-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Notes-md",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["notes"],
  creator: "Mahendra S H",

  authors: [
    {
      name: "Mahendra S H",
      url: siteConfig.url,
    },
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
  other: {
    "og:image": siteConfig.ogImage,
    "twitter:image": siteConfig.ogImage,

    "og:title": siteConfig.name,
    "og:description": siteConfig.description,
    "og:url": siteConfig.url,
    "twitter:card": "summary_large_image",
    "twitter:title": siteConfig.name,
    "twitter:description": siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-background text-foreground"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className=" flex justify-center  ">{children}</main>
          <span className=" fixed bottom-4 right-4">
            <ModeToggle />
          </span>
          <span className=" fixed bottom-4  right-1/2">
            <UpButton />
          </span>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
