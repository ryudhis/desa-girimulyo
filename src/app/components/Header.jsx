"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAsiaAustraliaIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "PROFIL DUSUN",
    path: "#profil",
  },
  {
    title: "GALERI DUSUN",
    path: "#Galeri",
  },
  {
    title: "PETA DUSUN",
    path: "#Peta",
  },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="flex flex-row px-4 justify-between items-center w-screen h-12 xl:h-14 bg-[#107C41]">
        <div className="flex flex-row gap-1 justify-center items-center">
          <PhoneIcon className="h-3 xl:h-4 w-3 xl:w-4 text-white" />
          <p className="text-white text-[8px] font-extralight">0831-88889999</p>
          <p className="text-white text-[8px] font-extralight">|</p>
          <EnvelopeIcon className="h-3 xl:h-4 w-3 xl:w-4 text-white" />
          <p className="text-white text-[8px] font-extralight">
            emaildesa@gmail.co.id
          </p>
        </div>
        <div className="flex flex-row gap-1 justify-center items-center">
          <GlobeAsiaAustraliaIcon className="h-3 xl:h-4 w-3 xl:w-4 text-white" />
          <p className="text-white text-[8px] font-extralight">
            Kabupaten Lampung Timur
          </p>
        </div>
      </div>
      <div className="w-screen bg-white px-3 h-14 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 justify-center items-center">
          <Image src="/images/Logo.png" width={28} height={28}></Image>
          <div className="flex flex-col">
            <p className="font-bold text-sm">Dusun 10 Desa Giri Mulyo</p>
            <p className="text-sm">Kabupaten Lampung Timur</p>
          </div>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-none text-white bg-[#107C41] hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-none text-white bg-[#107C41] hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Header;
