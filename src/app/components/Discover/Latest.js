"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/navigation";

function Latest({ news }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={sliderRef} className="relative w-full mx-auto px-6">
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="pb-10"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-300 shadow-lg rounded-lg overflow-hidden h-[500px]">
              <div className="h-1/2 w-full">
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt="Latest News"
                  className="w-full h-full"
                />
              </div>

              <div className="h-1/2 bg-white flex flex-col justify-center px-6 py-4 gap-3">
                <h6 className="text-gray-600 text-sm">{item.date}</h6>
                <h2 className="text-lg sm:text-2xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-md text-gray-700">{item.description}</p>
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

export default Latest;
