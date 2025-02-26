import { motion } from "framer-motion";
import { image } from "motion/react-client";

const Guitar = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="guitar-img"
        src={image}
        alt="guitarist"
      />
    </div>
  );
};
export default Guitar;
