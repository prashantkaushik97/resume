import React from 'react'
import Title from '../layouts/Title'
import { sbp, detailing, tabletop,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          
          des="Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Tabletop"
          des="A MERN Stack SaaS to manage restaurants and enable QR based menu. Also developed a cross platform mobile application using react native."
          src={tabletop}
          githubLink="https://github.com/prashantkaushik97/menu-frontend"
        />
        <ProjectsCard
          title="detailingdevils.com"
          des="Website for an auto detailing client. Developed an appointment booking portal and deployed the webapp on AWS."
          src={detailing}
          websiteLink="https://www.detailingdevils.com/"
        />
        <ProjectsCard
          title="sbpgroup.in"
          des=" Website for a real estate developer and promotor. Fixed various bugs in CRM and vendor registration."
          src={sbp}
          websiteLink="https://www.sbpgroup.in/"
        />
        
      </div>
    </section>
  );
}

export default Projects