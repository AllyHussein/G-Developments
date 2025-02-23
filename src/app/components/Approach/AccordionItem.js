"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
      });
      gsap.to(iconRef.current, { rotate: 180, duration: 0.3 });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3 });
      gsap.to(iconRef.current, { rotate: 0, duration: 0.3 });
    }
  }, [isOpen]);

  return (
    <div className="border-b last:border-none">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-100 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span ref={iconRef} className="text-xl">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        ref={contentRef}
        className="px-6 overflow-hidden bg-gray-50 text-gray-600 text-sm leading-relaxed"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="py-4">{content}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
