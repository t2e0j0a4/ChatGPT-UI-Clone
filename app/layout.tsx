import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const notosans = Noto_Sans({ subsets: ["latin"], weight : ['100', '300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Chatgpt",
  description: "ChatGPT Clone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={notosans.className}>
      <body>{children}</body>
    </html>
  );
}
