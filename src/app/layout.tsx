import type { Metadata } from "next";
import { Martel_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import Providers from "./providers";


const martelSans = Martel_Sans({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  variable: "--font-martel-sans"
});

export const metadata: Metadata = {
  title: "Catflix",
  description: "Your streaming platform",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${martelSans.className} font-martel`}>
        <main>
          <Providers>
            {children}
          </Providers>
          </main>
        <Toaster/>
        </body>
    </html>
  );
}
