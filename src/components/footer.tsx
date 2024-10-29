import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-red-800 h-32 w-full text-center p-5 text-white text-2xl font-semibold mt-[10%] mx-auto ">
      <div>
        Copyright <FaRegCopyright className="inline" /> 2024 <br /> All Rights
        Reserved.
      </div>
      <div>Created By Sana Farasat</div>
    </footer>
  );
}

export default Footer;
