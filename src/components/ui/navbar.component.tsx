import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-6 md:px-12 py-6"
    >
      <Link to="/" className="text-[10px] md:text-xs tracking-[0.2em] font-semibold">
        <div className="text-accent-red">FULL STACK & DEVOPS ENGINEER</div>
        <div className="text-foreground/80">DIGITAL CREATOR</div>
      </Link>

      <div className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] font-semibold">
        <span>AVAILABLE FOR FREELANCE</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-red" />
        </span>
      </div>
    </motion.header>
  );
}
