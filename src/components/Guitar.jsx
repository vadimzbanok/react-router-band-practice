import { motion } from "framer-motion";
import image from "../../public/images/guitar.jpeg";

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
