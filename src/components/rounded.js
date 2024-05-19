import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Rounded(props) {
  const targetValue = Number(props.children) || 0; // Convert children to number if possible, or default to 0
  const startValue = targetValue - 13; // Calculate the start value
  const count = useMotionValue(startValue); // Initialize count with start value
  const rounded = useTransform(count, Math.floor);

  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust this value as needed
    triggerOnce: false, // Animation will trigger every time it comes into view
  });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, targetValue, {
        duration: 2,
      });

      return () => animation.stop(); // Stop the animation on component unmount or when it goes out of view
    } else {
      count.set(startValue); // Reset count to start value when out of view
    }
  }, [inView, count, targetValue, startValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
