"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".about-section",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        className="object-cover"
        src="/assets/header.png"
        fill
        alt="Header Image"
      />

      <div className="absolute top-0 lg:left-20 w-full flex justify-between items-center p-6 text-white max-w-6xl mx-auto">
        <p className="text-3xl font-bold fade-in">G Developments</p>

        <div className="hidden md:flex space-x-6 items-center fade-in">
          <Link href="#" className="hover:text-gray-300">
            Our Communities
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Latest Updates
          </Link>
          <Link href="#" className="flex items-center hover:text-gray-300">
            العربية{" "}
            <Image
              className="mx-1 mb-1"
              src={"/assets/globe.png"}
              width={25}
              height={25}
              alt="globe"
            />
          </Link>
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
            Get In Touch
          </button>
        </div>

        <button
          className="md:hidden fade-in z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center text-xl space-y-6 transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <X className="w-8 h-8" />
        </button>

        <Link
          href="#"
          className="hover:text-gray-300"
          onClick={() => setMenuOpen(false)}
        >
          Our Communities
        </Link>
        <Link
          href="#"
          className="hover:text-gray-300"
          onClick={() => setMenuOpen(false)}
        >
          Latest Updates
        </Link>
        <Link
          href="#"
          className="flex items-center hover:text-gray-300"
          onClick={() => setMenuOpen(false)}
        >
          العربية{" "}
          <Image
            className="mx-1 mb-1"
            src={"/assets/globe.png"}
            width={25}
            height={25}
            alt="globe"
          />
        </Link>
        <button
          className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200"
          onClick={() => setMenuOpen(false)}
        >
          Get In Touch
        </button>
      </div>

      <div className="absolute bottom-40 left-0 sm:bottom-20 sm:left-20 max-w-sm text-white px-6 about-section">
        <h1 className="text-4xl sm:text-7xl my-5">About Us</h1>
        <p className="text-2xl sm:text-lg">
          Real Estate developer blending timeless design with comfortable
          living.
        </p>
      </div>
    </div>
  );
}

export default Header;
