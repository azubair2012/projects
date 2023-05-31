import React from "react";
import Navbar from "../components/Navbar";
import Art1 from "/public/assets/image/art2.jpg";
import Art2 from "/public/assets/image/art1.jpg";
import Art3 from "/public/assets/image/art3.jpg";
import Artist from "/public/assets/image/artist.png";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import Image from "next/image";

const Art = () => {
  return (
    <div className="mx-10">
      <Navbar />
      <div className="flex text-white">
        <div className="absolute z-20 w-[300px] bottom-5 right-[450px]">
          <Image src={Art3} />
        </div>
        <div className="bg-black w-[70vw] h-screen relative ">
          <div className="text-[100px] absolute text-[#a4765ec1] font-title font-bold right-[5rem] top-[4rem]">
            CONTEMPORARY <br /> <span className="text-white">ART</span>
          </div>
          <div className="flex justify-center items-center gap-[60px] mt-[200px]">
            <div className="">
              <Image src={Art1} width={400} />
            </div>
            <div>
              <Image src={Art2} width={350} />
            </div>
          </div>

          <div className="ml-[200px] uppercase text-[#a4765ec1] text-[20px]">
            elevate your senses <br /> with contemporary art
          </div>

          <div className="ml-[800px] text-[#a4765ec1] text-[100px]">
            * <span />
            * <span />*
          </div>
        </div>
        <div className="bg-red-800 w-[30vw] h-screen relative">
          <div className="w-[300px] text-[25px] ml-[150px] mt-[200px]">
            BoArt offers a diverse range of arts that reflect the cultural and
            social issues of our times
          </div>
          <Link href="/art">
            <div className=" font-mono text-[25px] flex underline absolute top-[400px] right-[180px]">
              Exhibitions <FiArrowUpRight />
            </div>
          </Link>

          <div className="w-[300px] h-[300px] bg-[#FFF4ED] absolute right-5 bottom-0"></div>
          <div className="w-[300px] absolute bottom-0 right-0">
            <Image src={Artist} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
