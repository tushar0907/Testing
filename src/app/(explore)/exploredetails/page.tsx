import Image from "next/image";
import React from "react";
import Banner from "../../../../assets/hero cards desktop.png";
import Link from "next/link";
import Museum from "../../../../assets/museum.png";


function ExploreDetailsPage() {
  return (
    <>
    <div className="relative w-full h-[550px] bg-[#d6d4c5] rounded-md overflow-hidden mb-16">
        {/* Leave space for the image */}
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            src={Banner}
            alt="Illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
     <div className="max-w-[1700px] mx-auto p-6">
      {/* Banner Section */}
      

      {/* Section Cards */}
      <div className="flex flex-wrap max-w-[1512px] justify-around items-start mb-16">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="mobile:w-full w-[699px] h-[528px] mb-16">
            <Link href={"/exploreblogs"}>
              <div className="bg-transparent rounded-lg overflow-hidden">
              <Image
                    src={Museum}
                    alt="Away from City"
                    className="w-[699px] h-[430px] rounded-[8px] object-cover"
                  />
                <div className="py-7 mobile:py-2">
                  <h3 className="text-3xl mobile:text-lg font-semibold  mobile:mb-0 text-[#342A28]">
                    Indian Music Experience Museum
                  </h3>
                  <p className="text-lg mobile:text-base font-medium text-[#A58E74] mb-4">
                    Indiranagar, Bengaluru
                  </p>
                  <div className="flex items-center space-x-4 text-[#343534]">
                    <p className="text-base font-semibold text-[#584139]">
                      <span className="font-medium">Ticket Prices: </span>
                      ₹250/adult
                    </p>
                    <span className="mx-4 text-[#9a7b4f]">|</span>
                    <p className="text-base font-semibold text-[#584139]">
                      <span className="font-normal">Hours: </span>8:00 AM - 6:30
                      PM
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Section - Explore in and Around */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl mobile:text-base font-semibold text-[#584139]">
            explore in and around
          </h3>
          <button className="text-[#9a7b4f] hover:underline">
            see collection →
          </button>
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-[300px] rounded-[8px] overflow-hidden relative"
            >
              {/* Image fully covers the card */}
              <img
                src="https://www.jsonline.com/gcdn/-mm-/18c7e235117e987c2fc1b69b6be93394b1572b8f/c=0-361-4004-2623/local/-/media/2018/07/02/WIGroup/Milwaukee/636661327607537423-mfa-boston-salon-2.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp"
                alt="Museum"
                className="w-[342px] h-[430px] rounded-[8px] object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text Overlay on Image */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h4 className="text-3xl font-semibold">Luxury Dining</h4>
                <p className="mobile:text-sm text-base">9 places ›</p>
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
