import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="MDTI Data Science"
            subTitle="University of Ottawa, Canada"
            des="Graduated with Masters degree with concentration in Applied Data Science."
            />
          <ResumeCard
            title="B.Tech. Computer Science and Engineering"
            subTitle="Punjabi University, India"
            des="Graduated with First Division Studied core computer subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          
         
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Publications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Revamping supermarkets with AI and RSSi"
            result="ICAIS"
            des="Proposed an AI based system to automate supermarkets."/>
          <ResumeCard
            title="Comparative Analysis of Object Detection Algorithms"
            result="ICADCML"
            des="Compared performance of different Neural Networks used for object detection."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education