import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moein Portfolio",
  description: "Moein Mohsenzadeh Ganji Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark-mode">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen `}
      >
        <Header />
        <main>{children}</main>
        <p className="text-center p-10 text-secondary-600">
          This is demo of Moein Mohsenzadeh Ganji portfolio
        </p>
      </body>
    </html>
  );
}
