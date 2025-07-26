"use client";
import { FaRegCopyright } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer
      className="max-w-[1500px] mx-auto bg-red-700 py-6 px-4 text-white text-center"
      data-aos="fade-up"
    >
      <div className="text-xl md:text-2xl xl:text-3xl font-medium space-y-2">
        <div>
          Copyright <FaRegCopyright className="inline mb-1" /> 2024 <br />
          All Rights Reserved.
        </div>
        <div className="text-sm md:text-base mt-2 tracking-wide">
          Created by{" "}
          <Link href={"https://github.com/Sana-Farasat"}>
            <span className="font-semibold underline">Sana Farasat</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
