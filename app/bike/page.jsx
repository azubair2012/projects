import React from "react";
import Image from "next/image";
import Link from "next/link";
import B1 from "/public/assets/image/bnw.png";
import wheel from "/public/assets/image/wheel.png";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FiDribbble } from "react-icons/fi";

const Bike = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      {/* coding */}

      <div className="bg-black h-screen overflow-hidden">
        <nav className="font-extrabold text-white text-[60px] italic flex justify-evenly items-center px-10 py-4">
          <Link href="" className="hover:underline decoration-white ">
            HOME
          </Link>
          <Link href="" className="hover:underline decoration-white ">
            CATEGORY
          </Link>
          <Link href="">
            <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ">
              <div className="text-white text-[90px] ">GR</div>
            </div>
          </Link>
          <Link href="" className="hover:underline decoration-white ">
            SERVICE
          </Link>
          <Link href="" className="hover:underline decoration-white ">
            CONTACT
          </Link>
        </nav>

        <div className="overflow-hidden">
          {/* purple object */}
          <div className=" text-white w-screen bg-purple-600 rounded-t-[800px] h-[90%] absolute">
            <div className="relative mx-[10%] mt-20 flex">
              <div className=" absolute ml-[592px] mt-[163px] animate-spin-slow">
                <Image src={wheel} width={390} />
              </div>

              <div className="-rotate-[8deg]">
                <Image src={B1} width={1000} />
              </div>

              <div className="mt-[130px] text-white ">
                <div className="border-solid border-2 border-white p-5 rounded-t-3xl ">
                  {" "}
                  <div className="text-[35px] font-semibold italic">
                    NEW ARRIVAL
                  </div>
                  <div className="p-2 text-[65px] bg-black font-extrabold flex justify-center items-center rounded-3xl">
                    GHOST
                  </div>
                  <div className="pt-3 text-[20px]">
                    RIDE ON THE EDGE... <br /> Unleash Speed and Precision{" "}
                    <br />
                    Experience the Thrill
                  </div>
                  <Link href="">
                    <div className="text-black mt-10 ml-16 w-[150px] h-14 rounded-[40px] flex justify-center items-center drop-shadow-lg shadow-xl bg-white">
                      <div>BUY NOW</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly mt-20">
              <p>
                &copy; <span>{currentYear}</span> Studio Zubair. All rights
                reserved.
              </p>

              <div className="flex gap-10 ">
                <Link href="/Home">
                  <ImInstagram />
                </Link>
                <Link href="/Home">
                  {" "}
                  <BsFacebook />
                </Link>
                <Link href="/Home">
                  <FiDribbble />
                </Link>
                <Link href="/Home">
                  {" "}
                  <BsYoutube />
                </Link>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Bike;
