"use client";

import { useEffect, useState } from "react";

function Loader() {
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  // }, []);

  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
