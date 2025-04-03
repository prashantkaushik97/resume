import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Software Developer.",
        "React.js Specialist.",
        "Node.js Enthusiast.",
        "Python Developer.",
        "AI & LLM Engineer.",
        "Full-Stack Developer.",
        "FastAPI Explorer.",
        "Problem Solver.",
        "Tech Storyteller.",
        "Cloud-native Developer.",
        "Backend Craftsman.",
        "Frontend Fanatic.",
        "Open Source Contributor.",
        "Clean Code Advocate.",
        "Creative Technologist.",
      ],
            loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hi there!👀🙋‍♂️  </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Prashant Kaushik</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "I am a passionate full-stack developer with expertise in the MERN stack, Python, and AI. With a strong foundation in web development and hands-on experience building solutions using large language models, I craft innovative, user-centric applications that blend intelligence with intuitive design."

</p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner