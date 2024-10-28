"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import cafesData from "../../data.json"; // Ensure you have your JSON data here

function ExploreBlogs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the `section` query parameter and scroll to the specific section
    const sectionIndex = parseInt(searchParams.get("section") || "0", 10);
    if (!isNaN(sectionIndex) && sectionsRef.current[sectionIndex]) {
      sectionsRef.current[sectionIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      setActiveIndex(sectionIndex); // Update the active section based on the query
    }
  }, [searchParams]);

  const handleBoxClick = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-screen mx-auto p-6">
      {/* Header and Slider */}
      <div
        className={`flex flex-row items-center overflow-x-auto mobile:mb-8 mb-16 shadow-md border-b-[#eaeaea] px-2 py-4 sticky top-24 z-10 transition-colors duration-300`}
      >
        <h2 className="text-3xl flex w-[30%] items-center font-semibold text-[#342A28] text-left tab:text-2xl mobile:hidden">
          Museums Collection
        </h2>
        <div
          ref={sliderRef}
          className="flex items-center mobile:w-auto w-full overflow-x-auto space-x-4 mobile:pl-2"
        >
          {cafesData.cafes.map((_, index) => (
            <div
              key={index}
              className={`flex-none mobile:w-24 mobile:h-24 w-24 h-24 rounded-md overflow-hidden cursor-pointer border-4 ${
                activeIndex === index ? "border-[#9a7b4f] shadow-md" : "border-transparent opacity-60"
              }`}
              onClick={() => handleBoxClick(index)}
            >
              <img
                src={cafesData.cafes[index].image_link}
                alt={`Blog Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-5xl text-[#342A28] font-semibold flex w-full justify-center items-center mobile:mb-8 mb-24 tab:text-4xl mobile:text-3xl">
        Top 5 Places for Dessert Lovers
      </h2>

      {/* Blog Content */}
      {cafesData.cafes.map((cafe, index) => (
        <div
          key={index}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } justify-between mobile:flex-col tab:flex-col w-full mb-16 items-center space-x-8 mobile:space-x-0 mobile:space-y-6`}
        >
          {/* Image Block */}
          <div
            className={`w-[50%] ${
              index % 2 === 0 ? "pl-10" : "pr-10"
            } mobile:w-full mobile:p-0 tab:w-full tab:pl-0`}
          >
            <img
              src={cafe.image_link}
              alt={cafe.name}
              className="w-full rounded-[10px] h-[565px] object-cover mobile:h-[250px] tab:h-[300px]"
            />
          </div>
          {/* Text Content */}
          <div className="w-[50%] mobile:w-full tab:w-full p-6">
            <p className="text-lg font-poppins font-normal text-[#000000] mb-4 leading-relaxed tab:text-lg mobile:text-base">
              {cafe.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreBlogs;
