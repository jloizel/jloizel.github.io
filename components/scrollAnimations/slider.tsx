"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function CurtainRevealAnimation({ children, delay = 0, className }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Pink Curtain Reveal */}
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={isInView ? { translateX: "100%" } : {}}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#E18EEC",
          zIndex: 1,
        }}
      />

      {/* Main Content with Slide-Up Effect */}
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 50 },  // Initially hidden and below
          visible: { opacity: 1, translateY: 0 },  // Slide into place
        }}
        transition={{
          duration: 0.2, // Control the slide-up duration
          delay: delay + 0.5, // Ensure the slide-up starts after the curtain reveal
          ease: "easeOut", // Smooth easing
        }}
        initial="hidden"
        animate={controls}
        style={{ position: 'relative', zIndex: 2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
