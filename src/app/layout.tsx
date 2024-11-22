import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export const metadata: Metadata = {
  title: "weCare.",
  description: "myPortfolio",
  icons: "/favicon.ico"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}
      
      >
        {children}
      </body>
    </html>
  );
}
