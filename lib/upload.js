import { useEffect, useRef, useState, cloneElement } from "react";

function Upload({ uwConfig, setInfo, children }) {
  const [loaded, setLoaded] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const loadCloudinaryScript = async () => {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    };

    loadCloudinaryScript();
  }, []);

  useEffect(() => {
    const initializeCloudinaryWidget = () => {
      if (loaded && window.cloudinary) {
        widgetRef.current = window.cloudinary.createUploadWidget(
          { ...uwConfig, cloudName: "dkkgn8f14" },
          (error, result) => {
            if (!error && result && result.event === "success") {
              setInfo(result.info);
            }
          }
        );
      }
    };

    initializeCloudinaryWidget();
  }, [loaded, uwConfig, setInfo]);

  return (
    <>
      {loaded && window.cloudinary
        ? cloneElement(children, {
            onClick: () => widgetRef.current.open(),
          })
        : ""}
    </>
  );
}

export default Upload;
