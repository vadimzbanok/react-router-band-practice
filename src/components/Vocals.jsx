import { motion } from "framer-motion";

const Vocals = () => {
  return (
    <div>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="vocals-img"
        src="public/images/Flux_Dev_A_dramatic_portrait_of_James_Hetfield_the_iconic_lead_2.jpeg"
        alt="vocalist"
      />
    </div>
  );
};

export default Vocals;
