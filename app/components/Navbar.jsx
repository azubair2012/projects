import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-black text-[20px] flex justify-evenly items-center py-4 bg-[#8f6149b7]">
      <div className="font-semibold text-[25px]">
        {" "}
        <Link href="/art">BoART&trade;</Link>{" "}
      </div>
      <div className="flex justify-center gap-10">
        <Link href="" className="hover:underline decoration-black ">
          Home
        </Link>
        <Link href="" className="hover:underline decoration-black ">
          About Us
        </Link>
        <Link href="" className="hover:underline decoration-black ">
          Tickets
        </Link>
      </div>
      <Link href="/art">
        <div className="h-9 w-[120px] bg-[#210b0b] text-center flex justify-center items-center text-white">
          Contact Us
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
