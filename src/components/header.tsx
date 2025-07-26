import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <header className=" max-w-[1500px] mx-auto flex justify-between items-center px-3 py-3">
      <div>
        <Link href={"/"}>
          <Image
            src="/Logo.png"
            alt="Logo"
            height={110}
            width={110}
            className="rounded-full overflow-hidden layout-responsive shadow-xl"
          />
        </Link>
      </div>
      <div>
        <nav>
          <ul className="hidden sm:flex space-x-7">
            <li>
              {" "}
              <Link href="/">
                <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                  Home
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/about">
                <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                  About
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/contact-us">
                <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link href="/skills">
                <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                  Skills
                </button>
              </Link>
            </li>
          </ul>

          <Sheet>
            <SheetTrigger className=" mx-auto sm:hidden text-white text-3xl ">
              <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400">
              <br />
              <br />
              <ul className="flex flex-col space-y-2 ">
                <li>
                  {" "}
                  <Link href="/">
                    <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-7 py-1 rounded-3xl font-semibold">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/about">
                    <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-7 py-1 rounded-3xl font-semibold">
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/contact-us">
                    <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      Contact
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      Projects
                    </button>
                  </Link>
                </li>
                <Link href="/skills">
                  <button className="bg-red-700 hover:bg-red-800 text-white text-2xl px-8 py-1 rounded-3xl font-semibold">
                    Skills
                  </button>
                </Link>
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

export default Header;
