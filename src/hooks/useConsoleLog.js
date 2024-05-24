import { useState, useEffect } from "react";
export const useConsoleLog = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  useEffect(() => {
    setIsFirstTime(false);
  }, []);
};
