"use client";
import React, { useState, useEffect, useRef } from "react";

function ExploreBlogs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-[1700px] mx-auto p-6">
      {/* Header with Image Indicators - Display differently on mobile */}
      <div className="flex flex-row items-center overflow-x-auto space-x-4 mb-16 shadow-md border-b border-[#eaeaea] px-2 py-4 sticky top-24 bg-white z-10 mobile:shadow-none mobile:border-b-0 mobile:bg-transparent mobile:flex-col mobile:items-start mobile:space-x-0 mobile:space-y-4">
        {" "}
        <h2 className="text-3xl flex w-full items-center font-semibold text-[#342A28] text-left tab:text-2xl mobile:hidden">
          Museums Collection
        </h2>
        {/* Slider Section */}
        <div className="flex items-center mobile:w-auto w-full overflow-x-auto space-x-4 mobile:flex-col mobile:space-x-0 mobile:space-y-4 mobile:fixed mobile:left-4 mobile:top-[150px] mobile:z-10">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`flex-none mobile:w-16 mobile:h-16 w-24 h-24 rounded-md overflow-hidden cursor-pointer border-4 ${
                activeIndex === index
                  ? "border-[#9a7b4f] shadow-md"
                  : "border-transparent"
              }`}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/024/048/567/large_2x/coffee-cup-top-view-on-old-wooden-table-leaf-pattern-on-cafe-latte-anise-stars-coffee-beans-in-bag-and-cinnamon-for-decoration-beautiful-organic-natural-view-with-best-drink-in-the-world-photo.jpg"
                alt={`Blog Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-5xl text-[#342A28] flex w-full justify-center items-center font-semibold mb-24 tab:text-4xl mobile:text-3xl">
        Top 5 Places for Dessert Lovers
      </h2>

      {/* Blog Content with alternating layout */}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } mobile:flex-col tab:flex-col mb-16 items-center space-x-8 mobile:space-x-0 mobile:space-y-6`}
        >
          {/* Image Block */}
          <div className="w-1/2 tab:w-full mobile:w-full p-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/048/567/large_2x/coffee-cup-top-view-on-old-wooden-table-leaf-pattern-on-cafe-latte-anise-stars-coffee-beans-in-bag-and-cinnamon-for-decoration-beautiful-organic-natural-view-with-best-drink-in-the-world-photo.jpg"
              alt={`Blog Image ${index + 1}`}
              className="w-full h-[480px] object-cover rounded-md mobile:h-[250px] tab:h-[300px]"
            />
          </div>
          {/* Text Content */}
          <div className="w-1/2 tab:w-full mobile:w-full p-4">
            <p className="text-xl text-[#000000] mb-4 leading-relaxed tab:text-lg mobile:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              convallis elit eget aliquam laoreet vel, sagittis mattis enim.
              Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est
              id consectetur molestie eros. Malesuada quam cursus blandit amet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              convallis elit eget aliquam laoreet vel, sagittis mattis enim.
              Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est
              id consectetur molestie eros. Malesuada quam cursus blandit amet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              convallis elit eget aliquam laoreet vel, sagittis mattis enim.
              Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est
              id consectetur molestie eros. Malesuada quam cursus blandit amet.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreBlogs;
