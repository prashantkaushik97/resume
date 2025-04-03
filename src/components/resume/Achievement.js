import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="mt-10 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Available on request</h2>
        </div>
        
      
      </div>
    </motion.div>
  );
};

export default Achievement;
