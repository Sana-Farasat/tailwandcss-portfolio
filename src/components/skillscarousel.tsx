"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaCss3Alt, FaReact} from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript} from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiPython,
  SiStreamlit,
  SiVercel,
  SiSanity,
  SiNpm,
  SiDaisyui
} from "react-icons/si";
import Slider from "react-slick";

function SkillsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 680,
        settings: { slidesToShow: 1}
      }
    ]
  };

  const skills = [
    { name: "HTML", icon: <IoLogoHtml5 className="text-red-500 h-20 w-20" />, color: "text-red-600" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 h-20 w-20" />, color: "text-blue-600" },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-500 h-20 w-20" />, color: "text-yellow-600" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 h-20 w-20" />, color: "text-blue-600" },
    { name: "React", icon: <FaReact className="text-pink-500 h-20 w-20" />, color: "text-pink-600" },
    { name: "Next.js", icon: <RiNextjsFill className="text-white h-20 w-20" />, color: "text-white" },
    { name: "Python", icon: <SiPython className="text-blue-500 h-20 w-20" />, color: "text-blue-600" },
    { name: "Streamlit", icon: <SiStreamlit className="text-red-500 h-20 w-20" />, color: "text-red-600" },
    { name: "Vercel", icon: <SiVercel className="text-white h-20 w-20" />, color: "text-white" },
    { name: "Sanity", icon: <SiSanity className="text-red-600 h-20 w-20" />, color: "text-red-600" },
    { name: "NPM", icon: <SiNpm className="text-red-600 h-20 w-20" />, color: "text-red-600" },
    { name: "DaisyUI", icon: <SiDaisyui className="text-red-600 h-20 w-20" />, color: "text-red-600" }
  ];

  return (
    <main className="bg-gradient-to-tr from-gray-400 via-gray-800 to-gray-950 py-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-10">
        My Skills
      </h2>

      <Slider
        {...settings}
        className="max-w-7xl mx-auto px-4 [&_.slick-slide]:mb-0 [&_.slick-track]:mb-0"
      >
        {skills.map((skill, index) => (
          <div key={index} className="px-4 ">
            <div className="rounded-3xl w-64 h-44 md:w-72 md:h-48 flex flex-col justify-center items-center text-xl text-white bg-gradient-to-t from-gray-100 via-gray-800 to-gray-950 shadow-lg hover:scale-105 transition-transform duration-300 mx-auto ">
              {skill.icon}
              <h2 className={`${skill.color} mt-2`}>{skill.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
}

export default SkillsCarousel;
