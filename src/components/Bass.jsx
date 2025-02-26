import { motion } from "framer-motion";

const Bass = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="bass-img"
        src="public/images-ex-164/bass.jpeg"
        alt="bass"
      />
    </div>
  );
};
export default Bass;
