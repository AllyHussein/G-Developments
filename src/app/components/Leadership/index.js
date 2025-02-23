"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Leader from "./Leader";

function Leadership() {
  const leadershipRef = useRef(null);
  const leaders = [
    {
      image: "/assets/Akram Ziyad.png",
      title: "Vice President - Strategy",
      name: "Akram Ziyad",
    },
    {
      image: "/assets/Ahmed Khaled.png",
      title: "Vice President - Real Estate",
      name: "Ahmed Khaled",
    },
    {
      image: "/assets/Mona Wael.png",
      title: "Head of People",
      name: "Mona Wael",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      leadershipRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <div
        ref={leadershipRef}
        className="flex flex-col sm:flex-row justify-between px-6 sm:px-24 py-12"
      >
        <h3 className="text-gray-500 text-xl sm:text-2xl font-semibold w-full sm:w-1/2 mb-4 sm:mb-0">
          Leadership
        </h3>
        <p className="w-full sm:w-1/2 text-lg text-black leading-relaxed">
          Leadership We aim to innovate and listen closely to our customers to
          provide them with the best customer experience in every aspect.
        </p>
      </div>
      <Leader leaders={leaders} />;
    </>
  );
}

export default Leadership;
