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
        <Image
          src="/logo.jpg"
          alt="Logo"
          height={110}
          width={110}
          className="rounded-full layout-responsive"
        />
      </div>
      <div>
        <nav>
          <ul className="hidden sm:flex space-x-7">
            <li>
              {" "}
              <Link href="/">
                <button className="bg-red-700 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                  Home
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/about">
                <button className="bg-red-700 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                  About
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/contact-us">
                <button className="bg-red-700  text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                  Contact
                </button>
              </Link>
            </li>
          </ul>

          <Sheet>
            <SheetTrigger className=" mx-auto sm:hidden text-white text-3xl ">
              <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col space-y-2 ">
                <li>
                  {" "}
                  <Link href="/">
                    <button className="bg-red-700 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/about">
                    <button className="bg-red-700 text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/contact-us">
                    <button className="bg-red-700  text-white text-2xl px-5 py-1 rounded-3xl font-semibold">
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

export default Header;
