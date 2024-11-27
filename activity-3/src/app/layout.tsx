import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YouTube Favs",
  description: "Your favourite place to store your favourite YouTube videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex items-center p-2 container">
          <h1 className="text-2xl font-extrabold text-primary">YouTube Favs</h1>
        </header>
        <main className="flex justify-center items-center">{children}</main>
        <footer className="flex justify-center items-center">
          <p>Your favourite place to store your favourite YouTube videos</p>
        </footer>
      </body>
    </html>
  );
}
