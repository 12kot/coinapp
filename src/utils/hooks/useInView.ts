import { RefObject, useEffect, useState } from "react";

const useInView = (ref: RefObject<HTMLElement>) => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const yCoord = node.getBoundingClientRect().top + window.scrollY;
      
    const handleScroll = () => {
      if (yCoord <= window.scrollY) setInView(true);
      else setInView(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return inView;
};

export default useInView;
