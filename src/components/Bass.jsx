import { motion } from "framer-motion";

const Bass = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="bass-img"
        src="public/images/Flux_Dev_A_closeup_portrait_of_Metallicas_bassist_Robert_Truji_1.jpeg"
        alt="bass"
      />
    </div>
  );
};
export default Bass;
