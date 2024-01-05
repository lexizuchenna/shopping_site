"use client";

import { useMainContext } from "@/context/MainContext";

function Loader() {
  const { isLoading } = useMainContext();

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}

export default Loader;
