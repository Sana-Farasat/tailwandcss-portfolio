// pages/techstack.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const techStack = [
  {
    name: "Next.js",
    description:
      "React framework for server-side rendering, routing, and optimized performance.",
    link: "https://nextjs.org/docs",
    color: "bg-black",
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for building modern, responsive UIs quickly.",
    link: "https://tailwindcss.com/docs",
    color: "bg-blue-500",
  },
  {
    name: "Sanity CMS",
    description:
      "Headless CMS for structured content and real-time collaboration.",
    link: "https://www.sanity.io/docs",
    color: "bg-red-600",
  },
  {
    name: "TypeScript",
    description:
      "A typed superset of JavaScript that helps you catch errors during development.",
    link: "https://www.typescriptlang.org/docs/",
    color: "bg-blue-700",
  },
  {
    name: "Python",
    description:
      "High-level programming language used for automation, APIs, and data processing.",
    link: "https://docs.python.org/3/",
    color: "bg-yellow-500",
  },
];

export default function TechStack() {
  return (
    <main className="max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-400 via-gray-800 to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Tech Stack
        </motion.h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`group ${tech.color} text-white p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-2 group-hover:underline">
                {tech.name}
              </h2>
              <p className="text-sm mb-4">{tech.description}</p>
              <Link
                href={tech.link}
                target="_blank"
                className="inline-block bg-white text-black font-semibold py-1 px-3 rounded hover:bg-gray-200 transition"
              >
                View Docs
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
