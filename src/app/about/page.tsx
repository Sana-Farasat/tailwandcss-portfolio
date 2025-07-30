"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <main className="max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-400 via-gray-800 to-gray-900">
      {/* ------------Section 1-------------- */}
      <section className="px-6 py-12 md:px-20 lg:px-40 text-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-white inline-block pb-1"
            data-aos="fade-up"
          >
            👋 About Me
          </h2>

          <p
            className=" text-2xl font-semibold leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I&apos;m a passionate Frontend Developer exploring the world of
            Backend Development. I&apos;ve built scalable and responsive UIs
            using Next.js, TailwindCSS, and modern UI libraries like DaisyUI and{" "}
            ShadCN. I also work with Streamlit for Python-based interfaces.
          </p>

          <p
            className="text-2xl font-semibold leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            My apps are usually deployed on Vercel — using serverless
            architecture for auto-scaling and seamless performance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-2 text-white border-b-4 border-white inline-block">
                🛠️ Skills
              </h3>
              <ul className=" text-xl font-semibold list-disc list-inside space-y-1">
                <li>Languages: TypeScript, JavaScript, Python, HTML, CSS</li>
                <li>Frameworks: Next.js, Streamlit</li>
                <li>Styling: TailwindCSS, DaisyUI, ShadCN</li>
                <li>Tools: Git, GitHub, Vercel</li>
              </ul>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-2 text-white border-b-4 border-white inline-block">
                📚 Currently Learning
              </h3>
              <ul className="text-xl font-semibold list-disc list-inside space-y-1">
                <li>Backend Development (APIs, Databases, Authentication)</li>
                <li>Full-stack project structure</li>
                <li>Advanced TypeScript patterns</li>
              </ul>
            </div>
          </div>

          <div className="mt-8" data-aos="zoom-in-up">
            <h3 className="text-2xl font-semibold mb-2 text-white border-b-4 border-white inline-block">
              🏆 Hackathon Experience
            </h3>
            <p className="text-2xl font-semibold leading-relaxed">
              Participated in 3 hackathons, collaborating in fast-paced
              environments to solve real-world challenges and build MVPs within
              limited time. These helped me strengthen my teamwork, design
              thinking, and rapid development skills.
            </p>
          </div>

          <div className="mt-8" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-2 text-white border-b-4 border-white inline-block">
              🎯 My Goal
            </h3>
            <p className="text-2xl font-semibold leading-relaxed">
              To become a proficient Full-Stack Developer who can build, scale,
              and deploy modern web applications that solve real problems and
              create great user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ------------Section 2-------------- */}

      {/* <Cli_Projects /> */}

      {/* ------------Section 3-------------- */}
      {/* <section> */}
      {/* ------------Github Div-------------- */}
      {/* <div className="text-center text-2xl py-2 text-blue-900 mt-10 border border-gray-200 bg-gray-100 mx-2 xl:mx-24 rounded-lg hover:font-bold sm:text-3xl">
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
        </div> */}
      {/* ------------npm Div-------------- */}
      {/* <div className="text-center text-2xl py-2 text-blue-900 mt-10 border border-gray-200  bg-slate-100 mx-2 xl:mx-24 rounded-lg hover:font-bold sm:text-3xl">
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
      </section> */}

      <br />
      <br />
      <br />
    </main>
  );
}
