import { motion } from "framer-motion";

const Drums = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="drums-img"
        src="public/images/Flux_Dev_A_closeup_photograph_of_a_sleek_silver_and_black_drum_0.jpeg"
        alt="drums"
      />
    </div>
  );
};
export default Drums;
