"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Slider from "../components/Slider";
import cafesData from "../../data.json"; // assuming JSON file is named cafes.json

function ExploreDetailsPage() {
  return (
    <>
      <Slider />
      <div className="w-screen mx-auto p-6">
        {/* Banner Section */}

        {/* Section Cards */}
        <div className="flex flex-wrap w-full justify-around items-start mb-16">
        {cafesData.cafes.map((cafe, index) => (
            <div
              key={index}
              className="mobile:w-full w-[699px] h-[528px] mobile:-mb-6 mb-16"
            >
              <Link href={`/exploreblogs?section=${index}`}>
                <div className="bg-transparent rounded-lg overflow-hidden">
                  <Image
                    src={cafe.image_link}
                    alt={cafe.name}
                    className="w-[699px] mobile:h-[300px] h-[430px] rounded-[8px] object-cover"
                    width={699}
                    height={430}
                  />
                  <div className="py-7 mobile:py-2">
                    <h3 className="text-3xl mobile:text-lg font-semibold mobile:mb-0 text-[#342A28] max-w-[300px] truncate">
                      {cafe.name}
                    </h3>
                    <p className="text-lg mobile:text-base font-medium text-[#A58E74] mb-4 max-w-[300px] truncate">
                      {cafe.address}
                    </p>
                    <div className="flex items-center space-x-4 text-[#343534]">
                      <p className="text-base font-semibold text-[#584139] max-w-[150px] truncate">
                        <span className="font-medium">Ticket Prices: </span>
                        {cafe.price_for_two}
                      </p>
                      <span className="mx-4 text-[#9a7b4f]">|</span>
                      <p className="text-base font-semibold text-[#584139] max-w-[200px] truncate">
                        <span className="font-normal">Speciality: </span>
                        {cafe.speciality.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Section - Explore in and Around */}
        <div className="mobile:mb-4 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl mobile:text-base font-semibold text-[#584139]">
              explore in and around
            </h3>
            <button className="text-[#9a7b4f] hover:underline">
              see collection →
            </button>
          </div>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {cafesData.cafes.slice(0, 6).map((cafe, index) => (
              <div
                key={index}
                className="flex-none w-[300px] rounded-[8px] overflow-hidden relative"
              >
                {/* Image fully covers the card */}
                <img
                  src={cafe.image_link}
                  alt={cafe.name}
                  className="w-[342px] h-[430px] rounded-[8px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Text Overlay on Image */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h4 className="text-3xl font-semibold max-w-[250px] truncate">
                    {cafe.name}
                  </h4>
                  <p className="mobile:text-sm text-base max-w-[250px] truncate">
                    {cafe.speciality[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreDetailsPage;
