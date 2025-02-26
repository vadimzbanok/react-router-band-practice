import { motion } from "framer-motion";

const Drums = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="drums-img"
        src="public/images-ex-164/drums.jpeg"
        alt="drums"
      />
    </div>
  );
};
export default Drums;
