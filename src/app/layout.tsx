import type { Metadata } from "next";
import { Noto_Sans,  } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Ashanti",
  description: "My Portfolio",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={noto.className}>
        <Navbar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
