import { motion } from "framer-motion";

const Vocals = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="vocals-img"
        src="public/images-ex-164/vocals.jpeg"
        alt="vocalist"
      />
    </div>
  );
};

export default Vocals;
