import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};
import { Raleway, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Malkah Web Services | Premium Web Design & Development",
  description: "Crafting modern, high-performance web experiences. Full stack development, UI/UX design, and SEO optimization for businesses.",
  icons: {
    icon: "/malkah-logo-v2-icon.png",
  },
  openGraph: {
    title: "Malkah Web Services",
    description: "Premium Web Design & Full Stack Development",
    url: "https://malkahservices.ca",
    siteName: "Malkah Web Services",
    images: [
      {
        url: "/og-image.jpg", // Create an image and put it in the public folder as og-image.jpg
        width: 1200,
        height: 630,
        alt: "Malkah Web Services Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malkah Web Services",
    description: "Premium Web Design & Full Stack Development",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} ${playfair.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
