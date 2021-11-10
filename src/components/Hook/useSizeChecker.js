import {useState, useEffect, useCallback} from "react";

export const useSizeChecker = () => {
  const [sizeCheck, setSizeCheck] = useState(window.innerWidth > 700);
  const checkSize = useCallback(() => {
    setSizeCheck(window.innerWidth > 700);
  }, []);

  useEffect(() => {
    const event = window.addEventListener("resize", checkSize);
    checkSize();
    return () => {
      window.removeEventListener("resize", event);
    };
  }, [checkSize]);

  return sizeCheck;
};
