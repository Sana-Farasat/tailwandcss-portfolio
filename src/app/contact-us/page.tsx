import Link from "next/link";
import Image from "next/image";
import "animate.css";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Contact() {
  return (
    <main className="max-w-screen-2xl mx-auto ">
      {/* Header */}
      <div className="flex flex-col text-gray-400 text-3xl mt-12 text-center animate__animated animate__fadeInDown">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold p-3 text-white">
          Hire Me
        </h2>
        <p className="text-white text-sm sm:text-base md:text-3xl xl:text-6xl">
          To grow your business at planet scale!
        </p>
      </div>

      {/* Resume Button */}
      <div className="flex mt-10 justify-center animate__animated animate__fadeInUp">
        <Link href="https://static-resume-builder-topaz.vercel.app/">
          <button className="bg-red-700 text-white text-3xl px-4 py-2 rounded-xl transition-transform duration-75 scale-105 hover:bg-red-800">
            Resume
          </button>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="text-white sm:px-44 md:px-56 lg:px-80 grid grid-cols-4 md:grid-cols-4 justify-items-center lg:space-x-2 mx-auto my-8 animate__animated animate__zoomIn">
        <Link href="https://www.facebook.com/profile.php?id=100009478189380">
          <BiLogoFacebookCircle className="h-16 w-auto md:h-20 md:w-20 bg-blue-700 rounded-3xl animate-pulse" />
        </Link>
        <Link href="https://www.instagram.com/sana_farasat/">
          <FaInstagramSquare className="h-16 w-auto md:h-20 md:w-20 bg-pink-700 rounded-3xl animate-pulse" />
        </Link>
        <Link href="https://www.linkedin.com/in/sana-farasat-b438a22b9/">
          <FaLinkedin className="h-16 w-auto md:h-20 md:w-20 bg-blue-700 rounded-3xl animate-pulse" />
        </Link>
        <Link href="https://github.com/Sana-Farasat">
          <FaGithub className="h-16 w-auto md:h-20 md:w-20 bg-black rounded-3xl animate-pulse" />
        </Link>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center animate__animated animated__fadeInLeft animate-pulse">
            <Image
              src={"/contact-page.webp"}
              alt="Contact Us"
              width={500}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Form */}
          <div className="bg-gradient-to-br from-gray-300 via-gray-600 to-gray-900 text-white rounded-xl shadow-lg p-8 w-full animate__animated animate__fadeInRight">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Get in Touch
            </h2>

            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Enter your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
