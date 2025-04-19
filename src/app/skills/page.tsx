// 'use client';

// import { FaCss3Alt, FaReact } from "react-icons/fa";
// import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
// import { RiNextjsFill } from "react-icons/ri";
// import {
//   SiTypescript,
//   SiPython,
//   SiStreamlit,
//   SiVercel,
//   SiSanity,
//   SiNpm,
//   SiDaisyui,
// } from "react-icons/si";
// import { motion } from "framer-motion";

// function Skills() {
//   return (
//     <main className="max-w-screen-2xl mx-auto bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950">
//       {/* <section>
//         <div className="text-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950">
//           <h2 className="text-[50px] font-bold text-red-700 p-4">My Skills</h2>
          
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center ">
//             <IoLogoHtml5 className="text-red-500 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//             <FaCss3Alt className="text-blue-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//             <IoLogoJavascript className="text-yellow-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//             <SiTypescript className="text-blue-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//             <FaReact className="text-pink-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//             <RiNextjsFill className="text-black  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//             <SiPython className="text-blue-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//             <SiStreamlit className="text-red-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//           </div>
//           <br />
//         </div>

//         <br />
//         <br />
//       </section>*/}

//       <h2 className="text-5xl flex justify-center md:text-6xl lg:text-7xl xl:text-8xl font-bold p-3 text-red-700">
//         My Skills
//       </h2>
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-7 max-w-5xl mx-auto overflow-visible ">
//         {/* ---------------------Html------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }} //Left to Right
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           {" "}
//           <IoLogoHtml5 className="text-red-500 h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//           <h2 className="text-red-600">HTML</h2>
//         </motion.div>

//         {/* ---------------------CSS------------------- */}

//         <motion.div
//           initial={{ opacity: 0, x: 100 }} //Right to Left
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <FaCss3Alt className="text-blue-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//           <h2 className="text-blue-600">CSS</h2>
//         </motion.div>

//         {/* ---------------------JavaScript------------------- */}

//         <motion.div
//           initial={{ opacity: 0, x: 100 }} //Right to Left
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <IoLogoJavascript className="text-yellow-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//           <h2 className="text-yellow-600">JavaScript</h2>
//         </motion.div>

//         {/* ---------------------TypeScript------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }} //Left to Right
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110 "
//         >
//           <SiTypescript className="text-blue-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//           <h2 className="text-blue-600">TypeScript</h2>
//         </motion.div>
//         {/* ---------------------React------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }} //Left to Right
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <FaReact className="text-pink-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//           <h2 className="text-pink-600">React</h2>
//         </motion.div>

//         {/* ---------------------Nextjs------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }} //Right to Left
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <RiNextjsFill className="text-black  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//           <h2 className="text-black">Nextjs</h2>
//         </motion.div>

//         {/* ---------------------Python------------------- */}

//         <motion.div
//           initial={{ opacity: 0, x: -100 }} //Left to Right
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <SiPython className="text-blue-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />

//           <h2 className="text-blue-600">Python</h2>
//         </motion.div>

//         {/* ---------------------Streamlit------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }} //Right to Left
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <SiStreamlit className="text-red-500  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//           <h2 className="text-red-600">Streamlit</h2>
//         </motion.div>
//         {/* ---------------------Vercel------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }} //Right to Left
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <SiVercel className="text-white  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//           <h2 className="text-black-600">Vercel</h2>
//         </motion.div>

//         {/* ---------------------Sanity------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }} //Left to Right
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <SiSanity className="text-red-600  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//           <h2 className="text-red-600">Sanity</h2>
//         </motion.div>

//         {/* ---------------------Npm------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }} //Left to Right
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <SiNpm className="text-red-600  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//           <h2 className="text-red-600">NPM</h2>
//         </motion.div>
//         {/* ---------------------Daisy Ui------------------- */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }} //Right to Left
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="rounded-3xl w-72 h-48 flex flex-col justify-center items-center text-3xl text-white mt-10 bg-gradient-to-t  from-gray-100 via-gray-800 to-gray-950 transition-transform duration-300 hover:scale-110"
//         >
//           <SiDaisyui className="text-red-600  h-24 w-24 md:h-28 md:w-28 transition-transform duration-300 hover:scale-110" />
//           <h2 className="text-red-600">Daisy Ui</h2>
//         </motion.div>
//         <div></div>
//         <br />
//         <br />
//         <br />
//       </section>
//     </main>
//   );
// }

// export default Skills;


// app/skills/page.tsx

import dynamic from 'next/dynamic';

// 👇 Dynamically import with SSR disabled
const Skills = dynamic(() => import('../../components/skills'), {
  ssr: true,
});

export default function SkillsPage() {
  return <Skills />;
}

