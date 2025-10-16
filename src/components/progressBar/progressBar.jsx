import { useEffect } from "react";
import { useState } from "react";

const INITIAL_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "7px",
    backgroundColor: "seagreen",
    zIndex: 9999
};

const INITIAL_PROGRESS = "0%";

const getProgressPercent = () => {
    return Math.floor(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      ) + "%"
}

export const ProgressBar = () => {

    const [progress, setProgress] = useState(INITIAL_PROGRESS);

    useEffect(() => {
        const handleProgress = () => setProgress(getProgressPercent());
        window.addEventListener("scroll", handleProgress);
        return () => window.removeEventListener("scroll", handleProgress);
    }, []);

    return (
        <div style={{...INITIAL_STYLE, width: progress}} />
    )
}