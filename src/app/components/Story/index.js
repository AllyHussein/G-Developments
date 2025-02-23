"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import StoryItem from "./StoryItem";

function Story() {
  const storyRef = useRef(null);
  const stories = [
    {
      image: "/assets/story1.png",
      title: "Total landbank",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
      number: "9,588,112",
    },
    {
      image: "/assets/story2.png",
      title: "Projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
      number: "8",
    },
    {
      image: "/assets/story3.png",
      title: "Years of Operations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
      number: "60",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <div
        ref={storyRef}
        className="flex flex-col sm:flex-row justify-between px-6 sm:px-24 py-12"
      >
        <h3 className="text-gray-500 text-xl sm:text-2xl font-semibold w-full sm:w-1/2 mb-4 sm:mb-0">
          Our Story
        </h3>
        <p className="w-full sm:w-1/2 text-lg text-black leading-relaxed">
          We are a family-owned real estate development company based in Egypt.
          Since 1955, we have been committed to delivering timeless, quality
          developments that epitomize comfort and functionality.
        </p>
      </div>
      {stories.map((story, i) => (
        <StoryItem key={i} story={story} />
      ))}
    </>
  );
}

export default Story;
