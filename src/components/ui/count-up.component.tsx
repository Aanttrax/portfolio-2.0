import {
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
  useInView,
  motion,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  target: number;
}

export default function CountUp({ target }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (inView) {
      if (prefersReducedMotion) {
        count.set(target);
      } else {
        const controls = animate(count, target, {
          ease: [0.22, 1, 0.36, 1],
          duration: 1.5,
        });
        return () => controls.stop();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
