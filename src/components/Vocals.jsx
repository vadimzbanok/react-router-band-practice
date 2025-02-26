import { motion } from "framer-motion";
import image from "../../public/images/vocals.jpeg";

const Vocals = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="vocals-img"
        src={image}
        alt="vocalist"
      />
    </div>
  );
};

export default Vocals;
