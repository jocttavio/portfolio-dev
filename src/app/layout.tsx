import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FloatingNav } from "./components/FloatingNav";
import { FaHome, FaCogs , FaProductHunt, FaStar, FaChild  } from "react-icons/fa";
import UptoStartButton from "./components/UptoStartButton";

// import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devfolio | Portfolio Website",
  description: "Devfolio is a portfolio website for developers to showcase their projects and skills.",
};

const menuItems = [{name:"Home", link:"#hero" ,  icon: <FaHome />}, {name:"Experience", link:"#experience", icon: <FaStar />}, {name:"Projects", link:"#projects",   icon: <FaProductHunt />}, {name:"Technologies", link:"#skills", icon: <FaCogs  />}, {name:"About", link:"#about",    icon: <FaChild />}]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {/* <Navbar /> */}
          <FloatingNav navItems={menuItems} />
          <main className="min-h-screen pt-24 relative">
            {children}
            <UptoStartButton />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}