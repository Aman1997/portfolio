import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInViewAnimation = () => {
  const headingControl = useAnimation();
  const bodyControl = useAnimation();

  const { inView: headingView, ref: headingRef } = useInView({
    triggerOnce: true,
  });
  const { inView: bodyView, ref: bodyRef } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (headingView) {
      headingControl.start(() => ({
        y: [60, 0],
        transition: { ease: "easeIn" },
      }));
    }
  }, [headingControl, headingView]);

  useEffect(() => {
    if (bodyView) {
      bodyControl.start(() => ({
        y: [80, 0],
        transition: { ease: "easeIn" },
      }));
    }
  }, [bodyControl, bodyView]);

  return {
    headingRef,
    headingControl,
    bodyRef,
    bodyControl,
  };
};
