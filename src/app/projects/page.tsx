import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constant/projects";

const Projects = () => {
  return (
    <main className="px-4 py-8 bg-gray-900 min-h-screen">
      {/* <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Projects...
      </h1> */}
      <h2 className="text-5xl flex justify-center md:text-6xl lg:text-7xl xl:text-8xl font-bold p-3 text-red-700">
        Projects
      </h2>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300"
          >
            <Image
              src={project.image}
              alt={project.name}
              height={300}
              width={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 bg-pink-50 flex flex-col justify-between h-full">
              {/* <div> */}
              <h3 className="text-lg font-semibold text-gray-800  text-center">
                {project.name} <br />
                <br />
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-2 px-12 rounded hover:bg-blue-700 transition duration-300"
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
