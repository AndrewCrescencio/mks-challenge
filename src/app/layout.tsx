import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/query-provider";
import { Toaster } from 'sonner';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "Create Next App",
  title: "MKS Sistemas",
  description: "frontend challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Toaster position="bottom-left" duration={1000} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
