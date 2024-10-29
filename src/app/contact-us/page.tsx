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
        <h2 className="text-8xl font-bold p-3  text-red-700">Hire Me</h2>
        <p>To grow your buisness at planet scale!</p>
      </div>

      <div className="flex  mt-10  justify-center">
        <Link href="https://static-resume-builder-topaz.vercel.app/">
          <button className="bg-red-800 text-white text-3xl px-4 py-2 rounded-md transition-transform duration-75 scale-105 hover:bg-slate-400 hover:text-black">
            Resume
          </button>
        </Link>
      </div>

      <div className="text-white flex flex-col items-center sm:flex sm:flex-row justify-center mt-7 gap-12 mx-auto">
        <Link href="https://www.facebook.com/profile.php?id=100009478189380">
          <BiLogoFacebookCircle className="h-36 w-36 bg-blue-700 rounded-3xl" />
        </Link>
        <Link href="https://www.instagram.com/sana_farasat/">
          <FaInstagramSquare className="h-36 w-36 bg-pink-700 rounded-3xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/sana-farasat-b438a22b9/">
          <FaLinkedin className="h-36 w-36 bg-blue-800 rounded-3xl" />
        </Link>
        <Link href="https://github.com/Sana-Farasat">
          <FaGithub className="h-36 w-36 bg-black rounded-3xl" />
        </Link>
      </div>

      <div className="flex text-gray-400 text-3xl mt-12  justify-center">
        <div>
          <legend>Name: </legend>

          <input
            type="text"
            placeholder=" Enter your name"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex text-gray-400 text-3xl mt-12  justify-center ">
        <div>
          <legend>Message: </legend>

          <textarea
            name="description"
            rows={4}
            cols={24}
            placeholder="Enter your message here............"
            className="rounded-lg"
          ></textarea>
        </div>
      </div>

      <div className="flex  mt-12  justify-center">
        <button className="bg-red-800 text-white text-3xl px-4 py-2 rounded-md transition-transform duration-75 scale-105 hover:bg-slate-400 hover:text-black">
          Send Email
        </button>
      </div>
    </main>
  );
}
export default Contact;
