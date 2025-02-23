"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/navigation";

function Leader({ leaders }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={sliderRef} className="relative w-full max-w-6xl mx-auto px-6">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {leaders.map((leader, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-300 shadow-lg overflow-hidden rounded-lg">
              <Image
                src={leader.image}
                width={500}
                height={600}
                alt={leader.name}
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-10 left-0 w-full bg-white text-center py-4">
                <h2 className="text-lg font-semibold">{leader.name}</h2>
                <p className="text-sm">{leader.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer custom-prev">
        <Image
          src="/assets/Previous.png"
          alt="previous"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer custom-next">
        <Image src="/assets/Next.png" alt="next" width={50} height={50} />
      </div>
    </div>
  );
}

export default Leader;
