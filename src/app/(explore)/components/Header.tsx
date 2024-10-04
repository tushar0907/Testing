import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../../../assets/Logo.svg";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full bg-white border-b border-[#eaeaea] py-8 px-6 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex mobile:justify-center justify-between items-center">
        {/* Logo Section */}          <Link href={"/"}>

        <div className="flex items-center justify-center">
            <span className="ml-4 text-3xl text-[#4f3c31] font-semibold italic">
              <Image src={Logo} alt="logo" />
            </span>
        </div>
        </Link>


        {/* Contact Section - Visible only on Desktop */}
        <div className="mobile:hidden border rounded-full p-3 flex items-center space-x-2">
          <FaWhatsapp className="text-[#4f3c31] align-middle" size={22} />
          <span className="text-lg font-semibold text-[#4f3c31] leading-none">
            9380834941
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
