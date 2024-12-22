import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    // <footer className=" bg-red-800 h-32 w-full text-center p-5 text-white text-2xl font-semibold mt-[10%] mx-auto ">
      <footer className=" max-w-[1500px] mx-auto bg-red-800 h-auto py-5 text-center text-white text-xl md:text-2xl xl:text-3xl">
      <div>
        Copyright <FaRegCopyright className="inline" /> 2024 <br /> All Rights
        Reserved.
      </div>
      <div>Created By Sana Farasat</div>
    </footer>
  );
}

export default Footer;
