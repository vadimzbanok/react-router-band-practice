import { motion } from "framer-motion";
import image from "../../public/images/bass.jpeg";

const Bass = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="bass-img"
        src={image}
        alt="bass"
      />
    </div>
  );
};
export default Bass;
