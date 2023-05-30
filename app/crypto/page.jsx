import React from "react";
import Link from "next/link";
import Image from "next/image";
import Play from "/public/assets/icon/play.svg";
import Apple from "/public/assets/icon/apple.svg";
import Mobile from "/public/assets/image/crypto.png";
import cLogo from "/public/assets/icon/cryp_logo.png";

function crypto() {
  const style = { color: "blue", width: "80px", height: "80px" };
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* navbar */}
      <div className=" py-10 flex justify-between items-center w-[95%] h-full">
        <div className=" lg:ml-[10%]">
          <Link href="#">
            <Image
              src={cLogo}
              alt="/"
              width="30"
              height="50"
              className="ml-10"
            />
          </Link>
        </div>
        <div className="mr-[5%] pb-5">
          <ul className=" hidden md:flex text-black font-bold">
            <Link href="">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Buy Crypto
              </li>
            </Link>
            <Link href="">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Exchange
              </li>
            </Link>
            <Link href="">
              <li className="ml-10 text-sm uppercase hover:border-b">
                About Us
              </li>
            </Link>
            <div className="pl-5">
              <input
                type="text "
                placeholder="Search"
                className="border-stone-800 text-center  border-4 rounded-3xl"
              />
            </div>

            <Link href="">
              <button className=" text-sm uppercase hover:bg-slate-400 border-stone-900 rounded-md p-3">
                Sign In
              </button>
            </Link>
            <Link href="">
              <button className=" text-sm uppercase hover:bg-purple-400 border-stone-900 rounded-md p-3">
                Sign Up
              </button>
            </Link>
          </ul>
        </div>
      </div>
      {/* main body */}
      <div className="flex justify-evenly  lg:mx-[15%]">
        <div className=" ml-10 mt-10">
          <div className=" text-center border-2 border-black  text-white bg-black rounded-lg">
            <p>0% Trading Commission</p>
          </div>
          <h1 className="font-extrabold text-[45px] text-[#6f3e9f] pt-3 ml-2 ">
            Join The Top <br /> Crypto Currency <br /> Exchange
          </h1>
          <h3 className="mb-8 text-[20px] font-bold">
            "Revolutionize Your Trading Strategy With Our <br /> Top-Tier Crypto
            Exchange Platform "
          </h3>
          <button className=" bg-black text-white w-24 h-10 rounded-lg hover:bg-[#4ecdff] hover:text-black">
            {" "}
            Join Now
          </button>
          <h2 className="mt-[80px] font-semibold text-red-900">
            {" "}
            Download The App
          </h2>
          <div className="flex gap-3 mt-2">
            <Link href="">
              {" "}
              <Image src={Play} width="120" alt="" />
            </Link>
            <Link href="">
              {" "}
              <Image src={Apple} width="120" alt="" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block md:block ">
          <Image src={Mobile} width={600} alt="" />
        </div>
      </div>
      <div>
        <p className="text-[#1D3557] pl-[5%] pt-8">
          &copy; <span>{currentYear}</span> Studio Zubair. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default crypto;
