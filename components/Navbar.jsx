import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/new-logo.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter, FaTwitch } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === "/uberEats" ||
      router.asPath === "/portfolio" ||
      router.asPath === "/crypto" ||
      router.asPath === "/pinterest" ||
      router.asPath === "/netflix" ||
      router.asPath === "/resume" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={logo}
            alt="/"
            width="150"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex  ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:underline underline-offset-8 decoration-2 decoration-[#039898]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:underline underline-offset-8 decoration-2 decoration-[#039898]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:underline  underline-offset-8 decoration-2 decoration-[#039898]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:underline  underline-offset-8 decoration-2 decoration-[#039898]">
                Projects
              </li>
            </Link>
            <Link href="/#resume">
              <li className="ml-10 text-sm uppercase hover:border-b hover:underline  underline-offset-8 decoration-2 decoration-[#039898]">
                Resume
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:underline underline-offset-8 decoration-2  decoration-[#039898]">
                Contact
              </li>
            </Link>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
        onClick={handleNav}
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logo} width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-8">
              <p className="uppercase tracking-widest text-[#039898]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-8 w-full nxs:w-[90%]  ">
                <a
                  href="https://www.linkedin.com/in/enrique-moran-garrido"
                  // target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                    <FaLinkedin size={20} />
                  </div>
                </a>
                <a
                  href="https://github.com/EnriqueMoranGarrido"
                  // target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898]">
                    <FaGithub size={20} />
                  </div>
                </a>
                <a
                  href="https://twitter.com/ImMythic2"
                  // target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898]">
                    <FaTwitter size={20} />
                  </div>
                </a>
                <Link href="/#resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898]"
                  >
                    <BsFillPersonLinesFill size={20} />
                  </div>
                </Link>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898]"
                  >
                    <AiOutlineMail size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
