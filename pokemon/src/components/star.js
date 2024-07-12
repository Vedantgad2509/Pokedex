import { motion } from "framer-motion";
import "./styles.css";

export default function Star() {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    />
  );
}
