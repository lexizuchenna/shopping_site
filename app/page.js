import styles from "../styles/Home.module.css";

import HotSales from "@/components/HotSales";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    // <MainContext>
    <>
      <div className="main-container">
        <div className="container">
          <Banner />
          <HotSales />
          <Categories />
        </div>
      </div>
    </>
    // {/* </MainContext> */}
  );
}
