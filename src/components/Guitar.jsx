import { motion } from "framer-motion";

const Guitar = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="guitar-img"
        src="public/images/Flux_Dev_A_dramatic_portrait_of_Metallicas_lead_guitarist_Jame_2.jpeg"
        alt="guitarist"
      />
    </div>
  );
};
export default Guitar;
