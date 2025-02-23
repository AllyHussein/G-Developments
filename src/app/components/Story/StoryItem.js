"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

function StoryItem({ story }) {
  const storyRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={storyRef}
      className="flex flex-col md:flex-row items-center justify-between gap-10 py-12 px-6 sm:px-20 border-y border-gray-300"
    >
      <div className="w-full md:w-1/3">
        <Image
          src={story.image}
          width={500}
          height={500}
          alt="story"
          className="w-full h-auto object-cover shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-4xl font-bold text-gray-900">{story.number}</h1>
        <h3 className="text-2xl font-semibold text-gray-500 mt-2 sm:mb-20">
          {story.title}
        </h3>
        <p className="text-lg text-gray-600 mt-3 leading-relaxed">
          {story.description}
        </p>
      </div>
    </div>
  );
}

export default StoryItem;
