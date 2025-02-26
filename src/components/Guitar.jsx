import { motion } from "framer-motion";

const Guitar = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="guitar-img"
        src="public/images/guitar.jpeg"
        alt="guitarist"
      />
    </div>
  );
};
export default Guitar;
