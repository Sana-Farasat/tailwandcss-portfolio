// "use client";
// import Image from "next/image";
// import ProjectEmbed2 from "@/projects/project2";
// import ProjectEmbed from "../../projects/project";
// import ProjectEmbed3 from "@/projects/project3";

// function About() {
//   return (
//     <main className="flex flex-col mt-12 mx-auto">
//       <div className="text-white text-2xl text-center mx-auto sm:text-3xl ">
//         <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold p-3 text-red-700">About Me</h2>
//         <p className="text-center p-2 text-lg md:text-2xl lg:text-3xl">
//           {" "}
//           I am Front-end Developer , Back-end Develper, a Full-Stack Developer!{" "}
//           <br /> Currently learning to build highly scalable applications to
//           help freelancers <br />
//           to grow their buissness. <br />
//           For making fast and reliable web applications learning to build <br />
//           websites on the framework of Next.js, <br />
//           By using typescript which is the superset of Javascript <br />
//           With the framework of tailwand css!
//         </p>
//       </div>

//       <div className="flex flex-col justify-around border border-gray-400 p-3 mt-3 mx-1 sm:flex-row">
//         <p className="text-white text-xl md:text-2xl my-auto text-center mb-4 sm:text-3xl sm:my-auto">
//           <span className=" text-3xl md:text-5xl font-bold text-blue-700">
//             Static Interactive <br />
//             Resume{" "}
//           </span>{" "}
//           in which i mentioned <br />
//           my personal biodata like personal information, <br /> education,
//           skills and experience etc.
//         </p>

//         <div className="h-auto w-auto ">
//           <ProjectEmbed />
//         </div>
//       </div>

//       <div className="flex flex-col justify-around border border-gray-400 p-3 mt-3 mx-1 sm:flex-row">
//         <p className="text-white text-xl md:text-2xl my-auto text-center mb-4 sm:text-3xl sm:my-auto">
//           <span className="text-3xl md:text-5xl font-bold text-blue-700">
//             Dynamic Resume <br /> Builder{" "}
//           </span>{" "}
//           in which i added functionalities <br />
//           to create its own curriculum vitae for users. <br />
//           Also added interactive and elegant colour <br />
//           for user interactivity.
//         </p>

//         <div className="h-auto w-auto">
//           <ProjectEmbed2 />
//         </div>
//       </div>

//       <div className="flex flex-col justify-around border border-gray-400 p-3  mt-3 mx-1 sm:flex-row">
//         <p className="text-white text-xl md:text-2xl my-auto text-center mb-4 sm:text-3xl sm:my-auto">
//           <span className="text-3xl md:text-5xl font-bold text-blue-700">
//             Dynamic, Editable and Shareable <br /> Resume Builder{" "}
//           </span>{" "}
//           in which i added functionalities <br />
//           to create its own curriculum vitae for users. <br />
//           Also added interactive and elegant <br /> colour for user
//           interactivity. <br />
//           Here you will find functionality to edit your resume, <br />
//           Download your resume and <br />
//           shareable link for cv with everyone.
//         </p>
//         <div className="h-auto w-auto">
//           <ProjectEmbed3 />
//         </div>
//       </div>

//     </main>
//   );
// }

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiPython, SiStreamlit, SiTypescript } from "react-icons/si";

export default function AboutMe() {
  return (
    <main className="max-w-screen-2xl mx-auto bg-gradient-to-t from-gray-400 via-gray-600 to-gray-900">
      {/* ------------Section 1-------------- */}
      <section className="px-6 py-12 md:px-20 lg:px-40 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-white inline-block pb-1">
            👋 About Me
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate <strong>Frontend Developer</strong> exploring the
            world of <strong>Backend Development</strong>. I’ve built scalable
            and responsive UIs using{" "}
            <span className="text-blue-900 font-bold">Next.js</span>,{" "}
            <span className="text-blue-900 font-bold">TailwindCSS</span>, and
            modern UI libraries like{" "}
            <span className="text-blue-900 font-bold">DaisyUI</span> and{" "}
            <span className="text-blue-900 font-bold">ShadCN</span>. I also work
            with <strong>Streamlit</strong> for Python-based interfaces.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            My apps are usually deployed on <strong>Vercel</strong> — using
            serverless architecture for auto-scaling and seamless performance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white border-b-4 border-white inline-block">
                🛠️ Skills
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Languages: TypeScript, JavaScript, Python, HTML, CSS</li>
                <li>Frameworks: Next.js, Streamlit</li>
                <li>Styling: TailwindCSS, DaisyUI, ShadCN</li>
                <li>Tools: Git, GitHub, Vercel</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white border-b-4 border-white inline-block">
                📚 Currently Learning
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Backend Development (APIs, Databases, Authentication)</li>
                <li>Full-stack project structure</li>
                <li>Advanced TypeScript patterns</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-2 text-white border-b-4 border-white inline-block">
              🏆 Hackathon Experience
            </h3>
            <p className="text-lg leading-relaxed">
              Participated in <strong>3 hackathons</strong>, collaborating in
              fast-paced environments to solve real-world challenges and build
              MVPs within limited time. These helped me strengthen my teamwork,
              design thinking, and rapid development skills.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-2 text-white border-b-4 border-white inline-block">
              🎯 My Goal
            </h3>
            <p className="text-lg leading-relaxed">
              To become a proficient <strong>Full-Stack Developer</strong> who
              can build, scale, and deploy modern web applications that solve
              real problems and create great user experiences.
            </p>
          </div>
        </div>
      </section>
      {/* ------------Section 2-------------- */}
      <section>
        <div className="text-center text-xl md:text-3xl text-white mt-4">
          <h2 className=" text-xl md:text-3xl sm:text-[40px] font-bold">
            CLI Based Projects Here!!
          </h2>
          <strong>Projects</strong> which i created based on Cli..
        </div>

        <div className=" flex flex-col items-center sm:flex sm:flex-row justify-around mt-4 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }} //Left to Right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-200 shadow-lg h-auto max-w-sm mb-3 mx-2 flex justify-around p-auto rounded-lg text-green-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out"
          >
            <p className="p-1 text-sm">
              The Number Guessing Game is a simple yet engaging command-line
              interface (CLI) game that challenges players to guess a randomly
              generated number within a specific range. This project
              demonstrates my skills in programming logic, user interaction, and
              game design.
            </p>
            <Image
              src="/ngg.png"
              alt="Number Guessing Game"
              height={1}
              width={100}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }} //Right to Left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-100 shadow-lg h-auto max-w-sm mb-3 mx-2  flex justify-around p-auto rounded-lg text-red-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out"
          >
            <p className="p-1 text-sm">
              The ATM Simulator is a command-line interface (CLI) application
              that replicates the functionality of a real ATM. This project
              allows users to perform basic banking transactions such as
              checking balances, withdrawing cash, and depositing funds,
              demonstrating my skills in application logic and user interaction.
            </p>

            <Image
              src="/atm.png"
              alt="ATM"
              height={0}
              width={120}
              className="rounded-lg"
            />
          </motion.div>
        </div>

        <div className=" flex flex-col items-center sm:flex sm:flex-row justify-around mt-4 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }} //Left to Right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-200 shadow-lg h-auto max-w-sm mb-3 mx-2 flex justify-around p-auto rounded-lg text-gray-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out"
          >
            <p className="p-1 text-sm">
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }} //Right to Left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-yellow-200 shadow-lg h-auto max-w-sm mb-3 mx-2 flex justify-around p-auto rounded-lg text-yellow-950 transition-transform duration-75 scale-100 hover:scale-105 ease-in-out"
          >
            <p className="p-1 text-sm">
              The CLI Currency Converter is a command-line interface application
              that allows users to convert amounts between different currencies.
              This project highlights my skills in API integration, data
              handling, and user interaction in a console environment.
            </p>

            <Image
              src="/curr.png"
              alt="Currency Convertor"
              height={0}
              width={120}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>
      {/* ------------Section 3-------------- */}
      <section>
        {/* ------------Github Div-------------- */}
        <div className="text-center text-2xl py-2 text-blue-900 mt-10 border border-gray-200 bg-gray-100 mx-2 xl:mx-24 rounded-lg hover:font-bold sm:text-3xl">
          <h2 className="text-[40px] font-bold">Interested in code base?</h2>{" "}
          Here is my github Profile
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
        {/* ------------npm Div-------------- */}
        <div className="text-center text-2xl py-2 text-blue-900 mt-10 border border-gray-200  bg-slate-100 mx-2 xl:mx-24 rounded-lg hover:font-bold sm:text-3xl">
          <h2 className="text-[40px] font-bold">Want to test?</h2> Here is my
          npm profile to check by using npx command..
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
      </section>

      <br />
      <br />
      <br />
    </main>
  );
}
