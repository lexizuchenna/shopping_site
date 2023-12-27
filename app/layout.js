import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { MainContext } from "@/context/MainContext";

import "../styles/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spree Commcerce",
  description: "Spree university shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContext>
          <Header />
          <Toaster />
          {children}
          <Footer />
        </MainContext>
      </body>
    </html>
  );
}
