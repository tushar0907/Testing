import React from "react";
import Banner from "../../../../assets/hero cards desktop.png";
import Image from "next/image";
import Link from "next/link";

function ExplorePage() {
  return (
    <div className="max-w-[1700px] mx-auto p-6">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] bg-[#d6d4c5] rounded-md overflow-hidden mb-16">
        <div className="absolute top-1/4 left-12">
          <h2 className="text-5xl font-semibold text-white tab:text-4xl mobile:text-3xl">Explore</h2>
          <p className="text-xl text-white mt-4 tab:text-lg mobile:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* Leave space for the image */}
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            src={Banner}
            alt="Illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Section - Explore in and Around */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-[#584139] tab:text-xl mobile:text-lg">
            explore in and around
          </h3>

          <Link href={"/explorecollections"}>
          
          <button className="text-[#9a7b4f] hover:underline tab:text-base mobile:text-sm">
            see collection →
          </button>
          </Link>
          
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-4">
        
        
        {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-[300px] rounded-md overflow-hidden relative tab:w-[250px] mobile:w-[200px]"
            >
              {/* Image fully covers the card */}
              <Link href={"/exploredetails"}>
              <img
                src="https://cdn.prod.website-files.com/65bb0d838b57c5aa2c4a2b9d/65e1eaa9c88fa546d21ab2d6_61766357266d4a50df17786f_9w2ykjya.jpeg"
                alt="Museum"
                className="w-full h-[350px] object-cover tab:h-[300px] mobile:h-[250px]"
              />
              {/* Darker Overlay Effect */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Text Overlay on Image */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h4 className="text-xl font-semibold tab:text-lg mobile:text-base">Luxury Dining</h4>
                <p className="text-sm tab:text-xs mobile:text-xs">9 places ›</p>
              </div>
              </Link>
             
            </div>
          ))}
        </div>
      </div>

      {/* Section - Events to Break Monotony */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-[#584139] tab:text-xl mobile:text-lg">
            events to break monotony
          </h3>
          <button className="text-[#9a7b4f] hover:underline tab:text-base mobile:text-sm">
            see collection →
          </button>
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-[300px] rounded-md overflow-hidden relative tab:w-[250px] mobile:w-[200px]"
            >
              {/* Image fully covers the card */}
              <Link href={"/exploredetails"}>

              <img
                src="https://d2cx26qpfwuhvu.cloudfront.net/millstad/wp-content/uploads/2022/08/21223321/Coldplay-_news.jpg"
                alt="Museum"
                className="w-full h-[350px] object-cover tab:h-[300px] mobile:h-[250px]"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Text Overlay on Image */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h4 className="text-xl font-semibold tab:text-lg mobile:text-base">Cozy Cafe</h4>
                <p className="text-sm tab:text-xs mobile:text-xs">3 places ›</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Section - Best Cruise Around You */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-[#584139] tab:text-xl mobile:text-lg">
            best cruise around you
          </h3>
          <button className="text-[#9a7b4f] hover:underline tab:text-base mobile:text-sm">
            see collection →
          </button>
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-[300px] rounded-md overflow-hidden relative tab:w-[250px] mobile:w-[200px]"
            >
              {/* Image fully covers the card */}
              <Link href={"/exploredetails"}>

              <img
                src="https://cdn.prod.website-files.com/65bb0d838b57c5aa2c4a2b9d/65e1eaa9c88fa546d21ab2d6_61766357266d4a50df17786f_9w2ykjya.jpeg"
                alt="Museum"
                className="w-full h-[350px] object-cover tab:h-[300px] mobile:h-[250px]"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Text Overlay on Image */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h4 className="text-xl font-semibold tab:text-lg mobile:text-base">Luxury Dining</h4>
                <p className="text-sm tab:text-xs mobile:text-xs">9 places ›</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Section - Enjoy with the Young Ones */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-[#584139] tab:text-2xl mobile:text-xl">
            enjoy with the young ones
          </h3>
          <button className="text-[#9a7b4f] hover:underline tab:text-base mobile:text-sm">
            see collection →
          </button>
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-[300px] rounded-md overflow-hidden relative tab:w-[250px] mobile:w-[200px]"
            >
              {/* Image fully covers the card */}
              <Link href={"/exploredetails"}>

              <img
                src="https://img.freepik.com/premium-photo/women-has-fun-happy-joy-day-amusement-park-summer-sunny-day-roller-coaster-jumping-girl-vacation-leisure-holiday-activities-concept-asian-women-nice-clear-blue-sky-enjoy-moment_33755-8725.jpg"
                alt="Museum"
                className="w-full h-[350px] object-cover tab:h-[300px] mobile:h-[250px]"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Text Overlay on Image */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h4 className="text-xl font-semibold tab:text-lg mobile:text-base">Cozy Cafe</h4>
                <p className="text-sm tab:text-xs mobile:text-xs">3 places ›</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
