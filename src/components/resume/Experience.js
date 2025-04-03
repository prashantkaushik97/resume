import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MEF Engineer"
            subTitle="Nokia - (Sep 2024 - Present)"
            result="Canada"
          // des={
          // <div style={{paddingBottom:'15px'}}>
          // <p style={{ marginBottom: '5px' }}>
          // • Redesigning and developing an existing Pearl-based framework in Python.
          // </p>
          // <p style={{ marginBottom: '5px' }}>
          // • Decoupled various components of the framework to make them independent from each other.
          // </p>
          // <p style={{ marginBottom: '5px' }}>
          // • Developed comprehensive test cases to validate the functionality of the engine, ensuring high-quality and
          // reliable test results
          // </p>
          // </div>}
          />
          <ResumeCard
            title="Software Developer"
            subTitle="Nokia - (Jan 2023 - Sept 2024)"
            result="Canada"
          // des={
          // <div style={{paddingBottom:'15px'}}>
          // <p style={{ marginBottom: '5px' }}>
          // • Redesigning and developing an existing Pearl-based framework in Python.
          // </p>
          // <p style={{ marginBottom: '5px' }}>
          // • Decoupled various components of the framework to make them independent from each other.
          // </p>
          // <p style={{ marginBottom: '5px' }}>
          // • Developed comprehensive test cases to validate the functionality of the engine, ensuring high-quality and
          // reliable test results
          // </p>
          // </div>}
          />
          <ResumeCard
            title="Software Developer"
            subTitle="Netsmartz (Oct 2021 - Jun 2022)"
            result="Remote"
          //             des={
          //             <div >
          //             <p style={{ marginBottom: '5px' }}>
          //             • Developed and maintained a SaaS application platform using JavaScript, ReactJS, and Redux, surpassing
          // industry standards.            </p>
          //             <p style={{ marginBottom: '5px' }}>
          //             • Utilized Material-UI to accelerate development and create a sleek and visually appealing application interface,
          // resulting in an exceptional user experience that delighted customers and boosted user engagement, leading to
          // a 40% decrease in user complaints.            </p>
          //             <p style={{ marginBottom: '5px' }}>
          //             • Translated Figma designs into high-quality ReactJS components, showcasing a keen eye for detail and a
          // dedication to delivering high-quality software solutions.
          //             </p>
          //             <p style={{ marginBottom: '5px' }}>
          //             • Implemented performance optimization techniques, including code splitting and lazy loading, resulting in a
          // 30% decrease in page load times and improved overall system performance.
          //             </p>
          //             <p style={{ marginBottom: '5px' }}>
          //             • Conducted technical interviews for full stack roles, evaluating candidates’ technical skills and assessing their
          // fit for the team.
          //             </p>
          //             <br/>
          //             </div>}
          />
          <ResumeCard
            title="System Engineer"
            subTitle="Infosys (Oct 2020 - Oct 2021)"
            result="Remote"
            des={
              <div>
                HSBC
              </div>
            }

          //             des={
          //             <div >
          //             <p style={{ marginBottom: '5px' }}>
          //             • Successfully modernized a legacy system by implementing microservice architecture, resulting in improved
          // scalability, maintainability, and performance.          </p>
          //             <p style={{ marginBottom: '5px' }}>
          //             • Designed and developed a modern web application using React and Material-UI, effectively replacing Oracle
          // Forms and eliminating the need for local applications.      </p>
          //             <p style={{ marginBottom: '5px' }}>
          //             • Leveraged Material-UI’s pre-designed UI components and responsive design features to create a visually
          // appealing and highly responsive user interface, resulting in improved user experience across different devices
          // and screen sizes.
          //             </p>
          //             <p style={{ marginBottom: '5px' }}>
          // • Optimized system performance by leveraging React’s virtual DOM and implementing efficient state
          // management, resulting in a 40% decrease in page load times.
          //             </p>
          //             <p style={{ marginBottom: '5px' }}>
          // • Collaborated closely with cross-functional teams to gather requirements, conduct system design, and perform
          // code reviews, ensuring high-quality deliverables and adherence to best coding practices.
          //             </p>
          //             <p style={{ marginBottom: '5px' }}>

          // • Developed reusable and modular UI components using React and styled-components, resulting in a 30%
          // reduction in code duplication and improved code maintainability.
          //             </p>
          //             <p style={{ marginBottom: '5px' }}>

          // • Conducted thorough testing and debugging of web application features, resolving issues promptly and
          // ensuring smooth system functionality.
          //             </p>
          //             <p style={{ marginBottom: '5px' }}>

          // • Participated in agile development processes, including sprint planning, daily stand-ups, and retrospectives,
          // contributing to a collaborative and efficient development environment.
          //             </p>
          //             <p style={{ marginBottom: '5px' }}>

          // • Mentored other teammates and new interns on React development best practices and provided technical
          // guidance, contributing to their skill development and team productivity.
          //             </p>
          //             <br/>
          //             </div>}
          />





        </div>

      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Realmatch.ca"
            result="Link"
            des="Agent free realestate platform for Canada" />
          <ResumeCard
            title="Tabletop"
            result="Link"
            des="QR based Restarurant managing system"
          />
          <ResumeCard
            title="Comparative Analysis of Object Detection Algorithms"
            result="Link"
            des="Compared performance of different Neural Networks used for object detection."
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
