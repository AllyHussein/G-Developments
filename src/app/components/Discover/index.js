"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Latest from "./Latest";

function Discover() {
  const discoverRef = useRef(null);

  const news = [
    {
      image: "/assets/news1.png",
      title: "G Developments launches Seashell Ras El Hekma",
      description:
        "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
      date: "News - May 2024",
    },
    {
      image: "/assets/new2.png",
      title: "G Developments launches Seashell Ras El Hekma",
      description:
        "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
      date: "News - May 2024",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      discoverRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <div
        ref={discoverRef}
        className="flex flex-col sm:flex-row justify-between px-6 sm:px-24 py-12 items-center"
      >
        <h3 className="text-3xl sm:text-4xl font-semibold w-full sm:w-1/2 mb-4 sm:mb-0">
          Discover our latest
        </h3>
        <button className="bg-black text-white flex rounded-full justify-between items-center p-4 gap-2 self-start sm:self-auto">
          <span>Media Center</span>
          <Image
            src="/assets/arrow_right.png"
            alt="Next Arrow"
            height={20}
            width={20}
          />
        </button>
      </div>

      <div className="px-6 sm:px-24 py-12">
        <Latest news={news} />
      </div>
    </>
  );
}

export default Discover;
