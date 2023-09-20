import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

// Components
import Sidebar from "./components/Sidebar/Sidebar";

// Context State
import AppState from "./context/AppState";

// General
const notosans = Noto_Sans({ subsets: ["latin"], weight : ['100', '300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "ChatGPT",
  description: "ChatGPT Clone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={notosans.className}>
      <body>
        <AppState>
          <main className="app">
            <Sidebar/>
            {children}
          </main>
        </AppState>
      </body>
    </html>
  );
}
