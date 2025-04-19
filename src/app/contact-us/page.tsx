import Link from "next/link";
import Image from "next/image";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Contact() {
  return (
    <main className=" max-w-screen-2xl mx-auto">
      <div className="flex flex-col text-gray-400 text-3xl mt-12 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold p-3 text-red-700">
          Hire Me
        </h2>
        <p className="text-sm sm:text-base md:text-3xl xl:text-6xl">
          To grow your buisness at planet scale!
        </p>
      </div>

      <div className="flex  mt-10  justify-center">
        <Link href="https://static-resume-builder-topaz.vercel.app/">
          <button className="bg-red-800 text-white text-3xl px-4 py-2 rounded-md transition-transform duration-75 scale-105 hover:bg-slate-400 hover:text-black">
            Resume
          </button>
        </Link>
      </div>

      <div className="text-white grid grid-cols-4 md:grid-cols-4 justify-items-center lg:space-x-2 mx-auto my-4">
        <Link href="https://www.facebook.com/profile.php?id=100009478189380">
          <BiLogoFacebookCircle className="h-20 w-auto md:h-20 md:w-20 bg-blue-700 rounded-3xl layout-responsive" />
        </Link>
        <Link href="https://www.instagram.com/sana_farasat/">
          <FaInstagramSquare className="h-20 w-auto md:h-20 md:w-20 bg-pink-700 rounded-3xl layout-responsive" />
        </Link>
        <Link href="https://www.linkedin.com/in/sana-farasat-b438a22b9/">
          <FaLinkedin className="h-20 w-auto md:h-20 md:w-20 bg-blue-700 rounded-3xl layout-responsive" />
        </Link>
        <Link href="https://github.com/Sana-Farasat">
          <FaGithub className="h-20 w-auto md:h-20 md:w-20 bg-black rounded-3xl layout-responsive" />
        </Link>
      </div>

      <section className="py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <Image
              src="/contact-us2.png"
              alt="Contact Us"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side Form */}
          <div className="bg-gradient-to-br from-gray-300 via-gray-600 to-gray-900 text-white rounded-lg shadow-lg p-8 w-full py-16 px-4 md:px-12">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
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
