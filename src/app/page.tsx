"use client";

import Image from "next/image";
import TypewriterComponent from "../components/typewriter";
import About from "./about/page";
import Contact from "./contact-us/page";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16">
      {/* <section className="flex items-center justify-between ml-16 mr-80 "> */}
      <section className="flex flex-col items-center sm:flex-row justify-between mt-16 gap-3">
        <div className="mb-8 sm:mb-0 md:mt-8">
          <Image
            src="/profile.jpg"
            alt="Profile"
            height={600}
            width={600}
            className="rounded-full mt-32 w-auto h-auto max-w-full max-h-full"
          />
        </div>

        {/* <div className="text-3xl text-yellow-50 flex flex-col justify-right mb-32 mt-40"> */}
        <div className="text-2xl sm:text-3xl text-yellow-50 flex flex-col items-center sm:items-start justify-center mb-32 mt-8">
          <h2 className="text-center sm:text-left">
            Hi, {/* <span className="text-5xl font-bold font-mono "> */}
            <span className="text-4xl sm:text-5xl font-bold font-mono">
              I am Sana Farasat{" "}
            </span>
            <br />a Front-end Developer
          </h2>

          <br />

          <TypewriterComponent />
        </div>
      </section>
      <section>
        <About />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  );
}
