"use client"

import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from "next/link";
import Slider from "../components/Slider";

function ExplorePage() {
  return (
    <>
      {/* Swiper for Banner */}
     <Slider />

      {/* The rest of your original code remains unchanged */}
      <div className="w-screen mobile:mt-12 h-[800px] pl-10 mobile:h-auto py-[50px] mobile:py-0">
        {/* Section - Explore in and Around */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-[#584139] tab:text-xl mobile:text-lg">
              explore in and around
            </h3>
            <Link href={"/explorecollections"}>
              <button className="text-[#9a7b4f] hover:underline text-base mobile:text-sm">
                see collection →
              </button>
            </Link>
          </div>
          <div className="flex space-x-[15px] overflow-x-auto pb-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-none rounded-[8px] w-[300px] overflow-hidden relative tab:w-[250px] mobile:w-[200px]"
              >
                {/* Image fully covers the card */}
                <Link href={"/exploredetails"}>
                  <img
                    src="https://cdn.prod.website-files.com/65bb0d838b57c5aa2c4a2b9d/65e1eaa9c88fa546d21ab2d6_61766357266d4a50df17786f_9w2ykjya.jpeg"
                    alt="Museum"
                    className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                  />
                  {/* Darker Overlay Effect */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  {/* Text Overlay on Image */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                      Luxury Dining
                    </h4>
                    <p className="text-base tab:text-xs mobile:text-xs">
                      9 places ›
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section - Events to Break Monotony */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-[#584139] tab:text-xl mobile:text-lg">
              events to break monotony
            </h3>
            <button className="text-[#9a7b4f] hover:underline tab:text-base mobile:text-sm">
              see collection →
            </button>
          </div>
          <div className="flex space-x-[15px] overflow-x-auto pb-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-none w-[300px] rounded-[8px] overflow-hidden relative tab:w-[250px] mobile:w-[200px]"
              >
                {/* Image fully covers the card */}
                <Link href={"/exploredetails"}>
                  <img
                    src="https://d2cx26qpfwuhvu.cloudfront.net/millstad/wp-content/uploads/2022/08/21223321/Coldplay-_news.jpg"
                    alt="Museum"
                    className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  {/* Text Overlay on Image */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                      Cozy Cafe
                    </h4>
                    <p className="text-base tab:text-xs mobile:text-xs">
                      3 places ›
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section - Best Cruise Around You */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-[#584139] tab:text-xl mobile:text-lg">
              best cruise around you
            </h3>
            <button className="text-[#9a7b4f] hover:underline tab:text-base mobile:text-sm">
              see collection →
            </button>
          </div>
          <div className="flex space-x-[15px] overflow-x-auto pb-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-none w-[300px] rounded-[8px] overflow-hidden relative tab:w-[250px] mobile:w-[200px]"
              >
                {/* Image fully covers the card */}
                <Link href={"/exploredetails"}>
                  <img
                    src="https://cdn.prod.website-files.com/65bb0d838b57c5aa2c4a2b9d/65e1eaa9c88fa546d21ab2d6_61766357266d4a50df17786f_9w2ykjya.jpeg"
                    alt="Museum"
                    className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  {/* Text Overlay on Image */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                      Luxury Dining
                    </h4>
                    <p className="text-base tab:text-xs mobile:text-xs">
                      9 places ›
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section - Enjoy with the Young Ones */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-[#584139] tab:text-2xl mobile:text-xl">
              enjoy with the young ones
            </h3>
            <button className="text-[#9a7b4f] hover:underline tab:text-base mobile:text-sm">
              see collection →
            </button>
          </div>
          <div className="flex space-x-[15px] overflow-x-auto pb-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-none w-[300px] rounded-[8px] overflow-hidden relative tab:w-[250px] mobile:w-[200px]"
              >
                {/* Image fully covers the card */}
                <Link href={"/exploredetails"}>
                  <img
                    src="https://img.freepik.com/premium-photo/women-has-fun-happy-joy-day-amusement-park-summer-sunny-day-roller-coaster-jumping-girl-vacation-leisure-holiday-activities-concept-asian-women-nice-clear-blue-sky-enjoy-moment_33755-8725.jpg"
                    alt="Museum"
                    className="w-[342px] h-[430px] rounded-[8px] object-cover tab:h-[300px] mobile:h-[250px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  {/* Text Overlay on Image */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="text-3xl font-semibold tab:text-lg mobile:text-base">
                      Cozy Cafe
                    </h4>
                    <p className="text-base tab:text-xs mobile:text-xs">
                      3 places ›
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExplorePage;
