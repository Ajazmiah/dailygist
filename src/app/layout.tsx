import type { Metadata } from "next";
import Header from "./_components/Header/Header";
import "./globals.css";
import Footer from "./_components/Footer/Footer";
import AdSense from "./_components/Adsense/AdSense";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    default: "DailyGist - Your Source for Today's Top Headlines",
    template: "DailyGist | %s",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { [key: string]: string }; // Adjust type based on your dynamic route
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense />
      </head>
      <body className={`${inter.className} antialiased font-sans`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
