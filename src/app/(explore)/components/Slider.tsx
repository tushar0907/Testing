import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SmallImage from "../../../../assets/BannerImg.svg"; // This is the small image, replace with your actual path

function Slider() {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    {[...Array(4)].map((_, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-[550px] bg-[#7F7F69] rounded-md overflow-hidden mb-16 flex items-center justify-between px-10">
          {/* Left section with text */}
          <div className="flex-1 px-28 mobile:px-3">
            <h3 className="text-lg font-semibold text-white uppercase mb-2">
              Spacez Collection
            </h3>
            <h1 className="text-6xl font-bold text-white mb-4">Explore</h1>
            <p className="text-white py-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* Right section for the small image */}
          <div className="flex-1 flex justify-end">
            <Image
              src={SmallImage}
              alt="Illustration"
              className="w-[700px] h-[500px] object-contain"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  );
}

export default Slider;