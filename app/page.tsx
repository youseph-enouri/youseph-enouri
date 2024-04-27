"use client"

import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import PROFILE from "public/kayne.jpg"
import TECH from "public/TECH.png"
import CODE from "public/CODE.png"
import SOCIAL from "public/SOCIAL.png"
import PROJECTS from "public/PROJECTS.png"
import INTERESTS from "public/INTERESTS.png"
import Modal from "@/components/Modal"
import { usePastExperiences } from "@/components/home/PastExperiences";
import { useTechStack } from "@/components/home/TechStack";
import { useExtra } from "@/components/home/Extra"
import { useProjects } from "@/components/home/Projects";

export default function Home() {
  const { setShowPastExperiences, PastExperiences } = usePastExperiences();
  const { setShowTechStack, TechStack } = useTechStack();
  const { setShowExtra, Extra } = useExtra();
  const { setShowProjects, Projects } = useProjects();
  
  return (
    <>
      <div className="z-10 w-full px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Kayne Lee
        </h1>
        <h1
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] text-3xl md:text-xxl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Computer Engineering Student @ Queen's University
        </h1>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-[#0A66C2] bg-[#0A66C2] px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-[#0A66C2]"
            href="https://www.linkedin.com/in/kaynelee" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* LinkedIn SVG Icon */}
            <svg
            className="h-4 w-4 fill-current text-white group-hover:text-[#0A66C2]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8.7 19h-3.4v-10h3.4v10zM7 8.3c-1.1 0-2-0.9-2-2 0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2zM20.7 19h-3.4v-5.5c0-1.3-0.5-2.5-1.5-2.5-0.9 0-1.3 0.6-1.6 1.2-0.1 0.2-0.2 0.5-0.2 0.8v5.9h-3.4v-10h3.4v1.6c0.5-0.8 1.4-1.8 3-1.8 2.2 0 3.8 1.4 3.8 4.4v5.8z"/>
          </svg>

            <p>Connect on LinkedIn</p>
          </a>

          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="https://github.com/kayne-lee" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* GitHub SVG Icon */}
            <svg
              className="h-4 w-4 fill-current text-white group-hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.752-1.334-1.752-1.09-.746.083-.73.083-.73 1.205.085 1.838 1.234 1.838 1.234 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.382 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.838 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.21.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            <p>Connect on GitHub</p>
          </a>

        </div>
      </div>
      <div className="my-10 grid w-[70%] max-w-screen-xl animate-fade-up grid-cols-1 gap-7 px-5 md:grid-cols-3 xl:px-0">
        {/* Feature 1 */}
        <div
          onClick={() => setShowPastExperiences(true)}
          className=" cursor-pointer flex flex-col align-center justify-center relative col-span-1 h-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-1"
        >
          <div className="h-[60%] flex flex-col justify-between align-center">
            <div className="mx-auto max-w-md text-2xl font-display text-center ">
              Past Experiences
            </div>
            <div className="flex flex-row justify-around">
              <Image 
                src={CODE}
                alt="kayne"
                className=""
                height={120}
              />
            </div>
          </div>
        </div>
        <PastExperiences />
        {/* Feature 2 */}
        <div
          className="relative col-span-1 h-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
        >
          <div className="flex h-[300px] items-center justify-center">
            <Image 
              src={PROFILE}
              alt="kayne"
              className="shadow-md rounded-full"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div
          onClick={() => setShowTechStack(true)}
          className="flex cursor-pointer flex-col relative items-center justify-center h-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
        >
          <div className="h-[60%] flex flex-col justify-between align-center">
            <div className="mx-auto max-w-md text-2xl font-display text-center ">
              Tech Stack
            </div>
            <div className="flex flex-row justify-around">
              <Image 
                src={TECH}
                alt="kayne"
                className=""
                height={120}
              />
            </div>
          </div>
        </div>
        <TechStack />
        {/* Feature 4 */}
        <div
          onClick={() => setShowExtra(true)}
          className="flex flex-col cursor-pointer relative items-center justify-center col-span-1 h-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
        >
          <div className="h-[60%] flex flex-col justify-between align-center">
            <div className="mx-auto max-w-md text-2xl font-display text-center ">
              Extra-Curriculars
            </div>
            <div className="flex flex-row justify-around">
              <Image 
                src={SOCIAL}
                alt="kayne"
                className=""
                height={120}
              />
            </div>
          </div>
        </div>
        <Extra />
        {/* Feature 5 */}
        <div
          onClick={() => setShowProjects(true)}
          className="cursor-pointer flex flex-col relative items-center justify-center col-span-1 h-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
        >
          <div className="h-[60%] flex flex-col justify-between align-center">
            <div className="mx-auto max-w-md text-2xl font-display text-center ">
              Projects
            </div>
            <div className="flex flex-row justify-around">
              <Image 
                src={PROJECTS}
                alt="kayne"
                className=""
                height={120}
              />
            </div>
          </div>
        </div>
        <Projects />
        {/* Feature 6 */}
        <div
          className="flex flex-col relative items-center justify-center col-span-1 h-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
        >
          <div className="h-[60%] flex flex-col justify-between align-center">
            <div className="mx-auto max-w-md text-2xl font-display text-center ">
              Interests
            </div>
            <div className="flex flex-row justify-around">
              <Image 
                src={INTERESTS}
                alt="kayne"
                className=""
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}