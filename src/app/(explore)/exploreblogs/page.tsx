"use client";
import React, { useState, useEffect, useRef } from "react";

function ExploreBlogs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return; // Ignore scroll events when scrolling manually

      setScrolled(window.scrollY > 0);

      let closestIndex = -1;
      let minDistance = window.innerHeight;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (closestIndex !== -1) {
        setActiveIndex(closestIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isManualScroll]);

  const handleBoxClick = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      setIsManualScroll(true); // Disable scroll-based detection temporarily
      section.scrollIntoView({ behavior: "smooth", block: "center" });

      // Wait for scroll to finish before updating active index
      setTimeout(() => {
        setActiveIndex(index); // Manually set the active index
        setIsManualScroll(false); // Re-enable scroll-based detection
      }, 600); // Adjust timeout to match scroll duration (typically 500-600ms)
    }
  };

  useEffect(() => {
    // Scroll the slider container to bring the active box into view
    if (sliderRef.current) {
      const activeSlider = sliderRef.current.children[activeIndex] as HTMLElement;
      if (activeSlider) {
        const sliderContainer = sliderRef.current;
        const sliderContainerRect = sliderContainer.getBoundingClientRect();
        const activeSliderRect = activeSlider.getBoundingClientRect();

        // Check if the active slider is outside the visible area of the container
        if (
          activeSliderRect.left < sliderContainerRect.left ||
          activeSliderRect.right > sliderContainerRect.right
        ) {
          activeSlider.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
      }
    }
  }, [activeIndex]);

  return (
    <div className="w-screen mx-auto p-6">
      {/* Header with Image Indicators - Display differently on mobile */}
      <div
        className={`flex flex-row items-center overflow-x-auto mobile:mb-8 mb-16 shadow-md border-r-white border-l-white border-b-[#eaeaea] px-2 py-4 sticky top-24 z-10 mobile:shadow-none mobile:border-b-0 mobile:items-center transition-colors duration-300 ${
          scrolled ? "mobile:bg-black/30 bg-white" : "mobile:bg-white" // Apply glassy effect when scrolled
        }`}
      >
        <h2 className="text-3xl flex w-[30%] items-center font-semibold text-[#342A28] text-left tab:text-2xl mobile:hidden">
          Museums Collection
        </h2>
        {/* Slider Section */}
        <div
          ref={sliderRef}
          className="flex items-center mobile:w-auto w-full overflow-x-auto space-x-4 mobile:pl-2"
        >
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className={`flex-none mobile:w-24 mobile:h-24 w-24 h-24 rounded-md overflow-hidden cursor-pointer border-4 transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "border-[#9a7b4f] shadow-md filter-none"
                  : "border-transparent filter opacity-60"
              }`}
              onClick={() => handleBoxClick(index)}
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

      <h2 className="text-5xl text-[#342A28] font-semibold flex w-full justify-center items-center mobile:mb-8 mb-24 tab:text-4xl mobile:text-3xl">
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
          } justify-between mobile:flex-col tab:flex-col w-full mb-16 items-center space-x-8 mobile:space-x-0 mobile:space-y-6`}
        >
          {/* Image Block */}
          <div
            className={`w-[50%] ${
              index % 2 === 0 ? "pl-10" : "pr-10"
            } mobile:w-full mobile:p-0 tab:w-full tab:pl-0`}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/048/567/large_2x/coffee-cup-top-view-on-old-wooden-table-leaf-pattern-on-cafe-latte-anise-stars-coffee-beans-in-bag-and-cinnamon-for-decoration-beautiful-organic-natural-view-with-best-drink-in-the-world-photo.jpg"
              alt={`Blog Image ${index + 1}`}
              className="w-full rounded-[10px] h-[565px] object-cover rounded-md mobile:h-[250px] tab:h-[300px]"
            />
          </div>
          {/* Text Content */}
          <div className="w-[50%] mobile:w-full tab:w-full p-6">
            <p className="text-lg font-poppins font-normal text-[#000000] mb-4 leading-relaxed tab:text-lg mobile:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              convallis elit eget aliquam laoreet vel, sagittis mattis enim.
              Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est
              id consectetur molestie eros. Malesuada quam cursus blandit amet.
              Odio nisi, commodo feugiat purus. In rhoncus, elementum donec
              neque. Feugiat ultrices duis mattis imperdiet hac facilisis turpis
              amet. Gravida egestas nec id euismod elit. Sit laoreet nunc, nec
              iaculis nisl. Convallis donec amet, id ullamcorper sapien justo,
              congue mauris.
            </p>

            <p className="py-4">
              Malesuada quam cursus blandit amet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus convallis elit eget aliquam
              laoreet vel, sagittis mattis enim. Iaculis quam morbi proin vel
              eget enim risus, porttitor. Sed est id consectetur molestie eros.
              Malesuada quam cursus blandit amet.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreBlogs;
