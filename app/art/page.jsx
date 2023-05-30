import React from "react";
import Navbar from "../components/Navbar";
import Art1 from "/public/assets/image/art2.jpg";
import Art2 from "/public/assets/image/art1.jpg";

import Image from "next/image";

const Art = () => {
  return (
    <div className="mx-10">
      <Navbar />
      <div className="flex text-white">
        <div className="bg-black w-[70vw] h-screen relative ">
          <div className="text-[100px] absolute">
            CONTEMPORARY <br /> ART
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              <Image src={Art1} width={400} />
            </div>
            <div>
              <Image src={Art2} width={350} />
            </div>
          </div>

          <div>text</div>
        </div>
        <div className="bg-red-800 w-[30vw] h-screen">
          <div>text</div>
          <div>text</div>
          <div>link</div>
          <div>bg</div>
          <div>image</div>
        </div>
      </div>
    </div>
  );
};

export default Art;
