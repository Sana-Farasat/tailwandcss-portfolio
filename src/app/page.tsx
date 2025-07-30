"use client";
import "animate.css";
import Image from "next/image";
import TypewriterComponent from "../components/typewriter";
import About from "./about/page";
import Contact from "./contact-us/page";
import FeaturedProjects from "@/components/featured";
import Services from "@/components/services";
import TechStack from "@/components/techstack";
import SkillsCarousel from "@/components/skillscarousel";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16">
      {/* <section className="flex items-center justify-between ml-16 mr-80 "> */}
      <section className="flex flex-col items-center sm:flex-row justify-between mt-3 gap-4">
        <div className="mb-8 sm:mb-0 md:mt-6 animate-pulse">
          <Image
            src="/profile.jpg"
            alt="Profile"
            height={600}
            width={600}
            className="rounded-full mt-20 w-auto h-auto max-w-full max-h-full"
          />
        </div>

        <div className="text-2xl md:text-3xl text-yellow-50 flex flex-col items-center sm:items-start justify-center mb-32 mt-8 relative">
          <h2 className="text-center sm:text-left block pb-3">
            Hi,
            <span className="text-4xl sm:text-5xl font-bold font-mono">
              I am Sana Farasat{" "}
            </span>
            <br />a Junior Front-end Developer
          </h2>

          <br />
          <div className="absolute -bottom-16">
            <TypewriterComponent />
          </div>
        </div>
      </section>
      <br />
      <br />
      <section>
        <About />
      </section>
      <br />
      <section>
        <SkillsCarousel />
      </section>
      <br />
      <br />
      <section>
        <FeaturedProjects />
      </section>
      <br />
      <section>
        <Services />
      </section>
      <br />
      <section>
        <TechStack />
      </section>
      <br />
      <section>
        <Contact />
      </section>
    </main>
  );
}
