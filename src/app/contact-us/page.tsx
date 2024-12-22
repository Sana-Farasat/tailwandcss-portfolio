import Link from "next/link";
import React from "react";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Contact() {
  return (
    <main>
      <div className="flex flex-col text-gray-400 text-3xl mt-12 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold p-3 text-red-700">Hire Me</h2>
        <p className="text-base md:text-3xl xl:text-6xl">To grow your buisness at planet scale!</p>
      </div>

      <div className="flex  mt-10  justify-center">
        <Link href="https://static-resume-builder-topaz.vercel.app/">
          <button className="bg-red-800 text-white text-3xl px-4 py-2 rounded-md transition-transform duration-75 scale-105 hover:bg-slate-400 hover:text-black">
            Resume
          </button>
        </Link>
      </div>

        <div className="text-white grid grid-cols-2 md:grid-cols-4 justify-items-center gap-2 lg:space-x-2 mx-auto my-4">
        <Link href="https://www.facebook.com/profile.php?id=100009478189380">
          <BiLogoFacebookCircle className="h-20 w-auto md:h-36 md:w-36 bg-blue-700 rounded-3xl layout-responsive" />
        </Link>
        <Link href="https://www.instagram.com/sana_farasat/">
          <FaInstagramSquare className="h-20 w-auto md:h-36 md:w-36 bg-pink-700 rounded-3xl layout-responsive" />
        </Link>
        <Link href="https://www.linkedin.com/in/sana-farasat-b438a22b9/">
          <FaLinkedin className="h-20 w-auto md:h-36 md:w-36 bg-blue-700 rounded-3xl layout-responsive" />
        </Link>
        <Link href="https://github.com/Sana-Farasat">
          <FaGithub className="h-20 w-auto md:h-36 md:w-36 bg-black rounded-3xl layout-responsive" />
        </Link>
      </div>

      <div className="flex text-gray-400 text-xl md:text-3xl mt-12 justify-center ">
        <div>
          <legend>Name: </legend>

          <input
            type="text"
            placeholder=" Enter your name"
            className="rounded-lg py-2 px-3"
          />
        </div>
      </div>

      <div className="flex text-gray-400 text-xl md:text-3xl mt-12 justify-center ">
        <div>
          <legend>Message: </legend>

          <textarea
            name="description"
            rows={4}
            cols={24}
            placeholder="Enter your message here............"
            className="rounded-lg py-2 px-3"
          ></textarea>
        </div>
      </div>

      <div className="flex  my-12  justify-center">
        <button className="bg-red-800 text-white text-3xl px-4 py-2 rounded-md transition-transform duration-75 scale-105 hover:bg-slate-400 hover:text-black">
          Send Email
        </button>
      </div>
    </main>
  );
}
export default Contact;
