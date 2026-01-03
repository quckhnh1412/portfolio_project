import React from 'react'
import {Spotlight} from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import {IconCloud} from './ui/icon-cloud'
const Hero = () => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <div className="pb-20 pt-28">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      


      <div className="flex justify-center relative my-20 z-10 ">

      <div className="absolute flex size-full max-w-lg justify-center overflow-hidden   bg-inherit scale-[300%] -z-20 opacity-70">
      <IconCloud  images={images} />
    </div>
    <div className="relative flex  max-w-lg justify-center overflow-hidden w-[300px] h-[300px]  bg-inherit rounded-full mr-48 ">
      <img src="./avata.png" className="w-full h-full object-cover opacity-[0.8]" 
    alt="Portrait" />
    </div>
        <div className="max-w-[95vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Hi! I'm Bùi Quốc Khánh"
            className="text-center text-[60px] font-extrabold md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            a Web Developer from in Hồ Chí Minh city.
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mt-10">
            Created with <span className='font-bold'>Next.js</span>  and <span className='font-bold'>Tailwind Css</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;