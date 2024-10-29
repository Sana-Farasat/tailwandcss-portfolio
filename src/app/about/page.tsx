"use client";
import Image from "next/image";
import ProjectEmbed2 from "@/projects/project2";
import ProjectEmbed from "../../projects/project";
import ProjectEmbed3 from "@/projects/project3";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

function About() {
  return (
    <main className="flex flex-col mt-12 mx-auto">
      <div className="text-white text-2xl text-center mx-auto sm:text-3xl ">
        <h2 className="text-8xl font-bold p-3  text-red-700">About Me</h2>
        <p>
          {" "}
          I am Front-end Developer , Back-end Develper, a Full-Stack Developer!{" "}
          <br /> Currently learning to build highly scalable applications to
          help freelancers <br />
          to grow their buissness. <br />
          For making fast and reliable web applications learning to build <br />
          websites on the framework of Next.js, <br />
          By using typescript which is the superset of Javascript <br />
          With the framework of tailwand css!
        </p>
      </div>

      <div className="flex flex-col justify-around border border-gray-400 p-3 mt-3 sm:flex-row">
        <p className="text-white text-2xl my-auto text-center mb-4 sm:text-3xl sm:my-auto">
          <span className="text-5xl font-bold text-blue-700">
            Static Interactive <br />
            Resume{" "}
          </span>{" "}
          in which i mentioned <br />
          my personal biodata like personal information, <br /> education,
          skills and experience etc.
        </p>

        <div className="h-auto w-auto ">
          <ProjectEmbed />
        </div>
      </div>

      <div className="flex flex-col justify-around border border-gray-400 p-3 mt-3 sm:flex-row">
        <p className="text-white text-2xl my-auto text-center mb-4 sm:text-3xl sm:my-auto">
          <span className="text-5xl font-bold text-blue-700">
            Dynamic Resume <br /> Builder{" "}
          </span>{" "}
          in which i added functionalities <br />
          to create its own curriculum vitae for users. <br />
          Also added interactive and elegant colour <br />
          for user interactivity.
        </p>

        <div className="h-auto w-auto">
          <ProjectEmbed2 />
        </div>
      </div>

      <div className="flex flex-col justify-around border border-gray-400 p-3  mt-3 sm:flex-row">
        <p className="text-white text-2xl my-auto text-center mb-4 sm:text-3xl sm:my-auto">
          <span className="text-5xl font-bold text-blue-700">
            Dynamic, Editable and Shareable <br /> Resume Builder{" "}
          </span>{" "}
          in which i added functionalities <br />
          to create its own curriculum vitae for users. <br />
          Also added interactive and elegant <br /> colour for user
          interactivity. <br />
          Here you will find functionality to edit your resume, <br />
          Download your resume and <br />
          shareable link for cv with everyone.
        </p>
        <div className="h-auto w-auto">
          <ProjectEmbed3 />
        </div>
      </div>

      {/* <div className="h-50 w-50 my-4 text-base shadow-lg overflow-hidden text-black bg-white  items-center border border-gray-400" > hello</div> */}

      <div className="text-center text-3xl text-white mt-4">
        <h2 className=" text-3xl sm:text-[40px] font-bold">
          CLI Based Projects Here!!
        </h2>
        <strong>Projects</strong> which i created based on Cli..
      </div>
      <div className=" flex flex-col items-center sm:flex sm:flex-row justify-around mt-4 ">
        <div className="bg-green-200 h-48 w-96 mb-3 flex justify-around p-auto rounded-lg text-green-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out">
          <p>
            The Number Guessing Game is a simple yet engaging command-line
            interface (CLI) game that challenges players to guess a randomly
            generated number within a specific range. This project demonstrates
            my skills in programming logic, user interaction, and game design.
          </p>
          <Image
            src="/ngg.png"
            alt="Number Guessing Game"
            height={1}
            width={100}
          />
        </div>

        <div className="bg-red-100 h-48 w-96 mb-3 flex justify-around p-auto rounded-lg text-red-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out">
          <p>
            The ATM Simulator is a command-line interface (CLI) application that
            replicates the functionality of a real ATM. This project allows
            users to perform basic banking transactions such as checking
            balances, withdrawing cash, and depositing funds, demonstrating my
            skills in application logic and user interaction.
          </p>

          <Image
            src="/atm.png"
            alt="ATM"
            height={0}
            width={120}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className=" flex flex-col items-center sm:flex sm:flex-row justify-around mt-4 ">
        <div className="bg-gray-200 h-48 w-96 mb-3 flex justify-around p-auto rounded-lg text-gray-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out">
          <p>
            The CLI Calculator is a command-line interface application that
            performs basic arithmetic operations. This project showcases my
            ability to implement mathematical logic and user interaction in a
            console environment.
          </p>
          <Image
            src="/cal.png"
            alt="Calculator"
            height={0}
            width={120}
            className="rounded-lg"
          />
        </div>

        <div className="bg-yellow-200 h-48 w-96 mb-3 flex justify-around p-auto rounded-lg text-yellow-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out">
          <p>
            The CLI Currency Converter is a command-line interface application
            that allows users to convert amounts between different currencies.
            This project highlights my skills in API integration, data handling,
            and user interaction in a console environment.
          </p>

          <Image
            src="/curr.png"
            alt="Currency Convertor"
            height={0}
            width={120}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="text-center text-2xl py-2 text-blue-900 mt-10 border border-gray-200 bg-gray-100 mx-24 rounded-lg hover:font-bold sm:text-3xl">
        <h2 className="text-[40px] font-bold">Interested in code base?</h2> Here
        is my github Profile
        <br />
        <br />
        <a
          href="https://github.com/Sana-Farasat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit my GitHub Profile
        </a>
      </div>

      <div className="text-center text-2xl py-2 text-blue-900 mt-10 border border-gray-200  bg-slate-100 mx-24 rounded-lg hover:font-bold sm:text-3xl">
        <h2 className="text-[40px] font-bold">Want to test?</h2> Here is my npm
        profile to check by using npx command..
        <br />
        <br />
        <a
          href="https://github.com/Sana-Farasat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit my npm Profile
        </a>
      </div>

      <div className="text-center text-3xl text-white mt-10 border border-gray-200 bg-yellow-100 transition-transform duration-75 scale-105 ease-in-out hover:bg-yellow-200">
        <h2 className="text-[50px] font-bold text-red-700 p-4">My Skills</h2>
        <div className="flex justify-center gap-10 my-3">
          <IoLogoHtml5 className="text-red-500 h-28 w-28" />
          <FaCss3Alt className="text-blue-500 h-28 w-28" />
        </div>
        <div className="flex justify-center gap-10 my-3">
          <IoLogoJavascript className="text-yellow-500 h-28 w-28" />

          <SiTypescript className="text-blue-500 h-28 w-28" />
        </div>
        <div className="flex justify-center gap-10 my-3">
          <FaReact className="text-pink-500 h-28 w-28" />
          <RiNextjsFill className="text-black h-28 w-28" />
        </div>
      </div>
    </main>
  );
}

export default About;
