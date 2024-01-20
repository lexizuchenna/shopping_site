import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Loader from "@/components/Loader";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { MainContext } from "@/context/Context";

import "../styles/style.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Spree Commcerce",
  description: "Spree university shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ fontFamily: "Poppins" }}>
      <body className={poppins.className} style={{ fontFamily: "Poppins" }}>
        <MainContext>
          <Header />
          <Loader />
          {children}
          <Footer />
          <Toaster />
        </MainContext>
      </body>
    </html>
  );
}
