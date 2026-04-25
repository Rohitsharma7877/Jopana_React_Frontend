import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // This will scroll to the top of the page
  }, [pathname]);

  return null;
};

export default ScrollToTop;
