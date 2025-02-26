import { motion } from "framer-motion";
import image from "../../public/images/drums.jpeg";

const Drums = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="drums-img"
        src={image}
        alt="drums"
      />
    </div>
  );
};
export default Drums;
