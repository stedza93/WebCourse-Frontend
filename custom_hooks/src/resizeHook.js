import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 600);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, []);
  return isScreenSmall;
};
