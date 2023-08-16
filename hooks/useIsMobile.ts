import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width: 768px" });

  useEffect(() => {
    if (mobile) setIsMobile(true);
    else setIsMobile(false);
  }, [mobile]);

  return { isMobile };
};

export default useIsMobile;
