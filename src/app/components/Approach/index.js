"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AccordionItem from "./AccordionItem";

function Approach() {
  const headingRef = useRef(null);

  const accordionData = [
    {
      title: "01 Location",
      content:
        "Location serves as the foundation upon which we curate remarkable living spaces. We rigorously evaluate each plot we choose, with a focus on accessibility, convenience, and potential for growth. Our strategic selection spans diverse areas across the city, guaranteeing you the best of every neighborhood.",
    },
    {
      title: "02 Design",
      content:
        "Our designs blend innovation, elegance, and functionality to create living spaces that inspire. Every detail is meticulously crafted, from contemporary aesthetics to timeless architectural elements, ensuring a perfect balance between beauty and practicality.",
    },
    {
      title: "03 Construction",
      content:
        "We uphold the highest standards in construction, utilizing premium materials and advanced techniques to ensure durability and safety. Our commitment to quality craftsmanship guarantees that every structure we build stands the test of time.",
    },
    {
      title: "04 End-to-End Service",
      content:
        "From the initial concept to the final handover, we provide a seamless experience. Our comprehensive end-to-end service covers everything from land acquisition and architectural planning to construction management and post-sale support, ensuring a stress-free journey for our clients.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-24 py-12 gap-8">
      <h3
        ref={headingRef}
        className="text-gray-500 text-xl sm:text-2xl font-semibold w-full sm:w-1/2 mb-4 sm:mb-0"
      >
        Our Approach
      </h3>

      <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden sm:w-2/3">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Approach;
