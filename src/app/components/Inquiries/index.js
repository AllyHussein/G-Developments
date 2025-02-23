"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function Inquiries() {
  const inquiriesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      inquiriesRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-gray-200 py-12">
      <div
        ref={inquiriesRef}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 sm:px-12 sm:w-3/4 mx-auto"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold w-full sm:w-1/2 mb-4 sm:mb-0">
          Are you interested in a property or have any other inquiries?
        </h3>
        <button className="bg-black text-white flex rounded-full justify-between items-center p-4 gap-2">
          <span>Get in touch</span>
          <Image
            src="/assets/arrow_right.png"
            alt="Next Arrow"
            height={20}
            width={20}
          />
        </button>
      </div>
    </div>
  );
}

export default Inquiries;
