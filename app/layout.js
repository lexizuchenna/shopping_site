import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
