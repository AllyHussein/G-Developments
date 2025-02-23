"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Links() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { title: "About us", path: "/" },
    { title: "Our Communities", path: "/" },
    { title: "Latest Updates", path: "/" },
    { title: "Careers", path: "/" },
    { title: "FAQs", path: "/" },
    { title: "Contact us", path: "/" },
  ];

  return (
    <div className="flex justify-between items-start sm:items-center">
      <ul className="sm:flex flex-wrap justify-center items-center gap-5 text-white">
        {links.map((link, index) => (
          <li key={index} className="relative flex items-center gap-2 py-1">
            <Link
              href={link.path}
              className="hover:text-gray-300 transition duration-300"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      {showArrow && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white hover:text-gray-300 transition duration-300"
        >
          <Image
            src={"/assets/arrow_up.png"}
            alt="scroll up"
            height={20}
            width={20}
          />
        </button>
      )}
    </div>
  );
}

export default Links;
