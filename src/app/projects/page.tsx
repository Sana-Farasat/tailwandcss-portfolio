"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constant/projects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="px-4 py-8 bg-gray-900 max-w-screen-2xl mx-auto">
      <h2 className="text-5xl flex justify-center md:text-6xl lg:text-7xl xl:text-8xl font-bold p-3 text-red-700">
        Projects
      </h2>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300"
            data-aos="fade-up"
          >
            <Image
              src={project.image}
              alt={project.name}
              height={300}
              width={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 bg-gray-800 flex flex-col justify-between h-full">
              {/* <div> */}
              <h3 className="text-lg text-white font-semibold   text-center">
                {project.name} <br />
                <br />
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-700 text-white py-2 px-12 rounded hover:bg-red-800 transition duration-300"
                >
                  View
                </Link>
              </h3>
              <br />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
