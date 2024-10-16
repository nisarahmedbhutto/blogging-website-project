"use client"; 

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex w-full h-16 justify-between items-center bg-green-800 text-white px-4 md:px-4">
      {/* heading navbar */}
      <h1 className="text-2xl font-bold">A I Trendings</h1>

      {/* Desktop Navbar */}
      <div>
        <ul className="md:flex hidden font-semibold">
          <Link href={"/"}>
            <li className="hover:text-lg hover:text-black hover:rounded-lg mx-[10px]">
              Home
            </li>
          </Link>
          <Link href={"/generative"}>
            <li className="hover:text-lg hover:text-black hover:rounded-lg mx-[10px]">
              Generative
            </li>
          </Link>
          <Link href={"/healthcare"}>
            <li className="hover:text-lg hover:text-black hover:rounded-lg mx-[10px]">
              Healthcare
            </li>
          </Link>
          <Link href={"/marketing"}>
            <li className="hover:text-lg hover:text-black hover:rounded-lg mx-[10px]">
              Marketing
            </li>
          </Link>
          <Link href={"/learning"}>
            <li className="hover:text-lg hover:text-black hover:rounded-lg mx-[10px]">
              Learning
            </li>
          </Link>
          <Link href={"/cybersecurty"}>
            <li className="hover:text-lg hover:text-black hover:rounded-lg mx-[10px]">
              Cybersecurty
            </li>
          </Link>
          <Link href={"/robotics"}>
            <li className="hover:text-lg hover:text-black hover:rounded-lg mx-[10px]">
              Robotics
            </li>
          </Link>
        </ul>
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="md:hidden cursor-pointer">
        <button onClick={toggleMenu}>&#8801; </button>
      </div>

      {/* Mobile Navbar (Menu Items) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-800 text-white flex flex-col items-center ">
          <Link href={"/"}>
            <a className="hover:text-lg hover:text-black hover:rounded-lg py-2">
              Home
            </a>
          </Link>
          <Link href={"/generative"}>
            <a className="hover:text-lg hover:text-black hover:rounded-lg py-2">
              Generative
            </a>
          </Link>
          <Link href={"/healthcare"}>
            <a className="hover:text-lg hover:text-black hover:rounded-lg py-2">
              Healthcare
            </a>
          </Link>
          <Link href={"/marketing"}>
            <a className="hover:text-lg hover:text-black hover:rounded-lg py-2">
              Marketing
            </a>
          </Link>
          <Link href={"/learning"}>
            <a className="hover:text-lg hover:text-black hover:rounded-lg py-2">
              Learning
            </a>
          </Link>
          <Link href={"/cybersecurty"}>
            <a className="hover:text-lg hover:text-black hover:rounded-lg py-2">
              Cybersecurty
            </a>
          </Link>
          <Link href={"/robotics"}>
            <a className="hover:text-lg hover:text-black hover:rounded-lg py-2">
              Robotics
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
