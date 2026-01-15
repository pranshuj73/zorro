import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConsoleSignature } from "@/components/console-signature";
import { BackgroundGrid } from "@/components/background-grid";
import { metadata } from "@/config/metadata";
import { MotionProvider } from "@/components/motion-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-white selection:text-black`}
      >
        <MotionProvider>
          {children}
          <BackgroundGrid />
          <ConsoleSignature />
        </MotionProvider>
      </body>
    </html>
  );
}
