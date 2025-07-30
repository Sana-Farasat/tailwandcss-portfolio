"use client";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Services() {
  const services = [
    {
      title: "Figma to Code Conversion",
      description:
        "Turn your Figma designs into clean, responsive Next.js components using Tailwind CSS.",
    },
    {
      title: "Responsive Website Design",
      description:
        "Mobile-first designs that look great on phones, tablets, and desktops.",
    },
    {
      title: "Next.js Development",
      description:
        "Fast, SEO-friendly websites with server-side rendering and routing using Next.js.",
    },
    {
      title: "Modern UI & Animation",
      description:
        "Smooth interactions using Framer Motion, Animate.css, AOS, and more.",
    },
    {
      title: "Sanity CMS Integration",
      description:
        "Customizable CMS-powered websites that clients can update without code.",
    },
    {
      title: "API Integration",
      description:
        "Fetch and display real-time data from REST APIs or public services like weather or news.",
    },
    {
      title: "GitHub & Vercel Deployment",
      description:
        "Version control via GitHub and one-click deployment with Vercel.",
    },
    {
      title: "Landing Pages & Portfolios",
      description:
        "Personal, business, or product-focused pages built for performance and design.",
    },
  ];

  return (
    <section className=" bg-gray-700  py-20 text-white px-6 max-w-screen-2xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 "
        >
          What I Can Build For You
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-100 via-gray-300 to-gray-600 text-black  p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckBadgeIcon className="h-6 w-6 text-red-700" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
