import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-20 pb-32 mb-10 md:gap-28 lg:flex-row">
      <div className="absolute right-0 top-0 h-screen w-full bg-[url('/pattern-bg.webp')] bg-cover bg-center md:-right-28 xl:-top-60" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-33px] w-10 lg:w-[50px]"
        />
        <h1 className="font-[700] leading-[120%] lg:text-[88px]">
          Get into the wild
        </h1>
        <p className="text-[16px] font-[400] mt-6 text-[#7B7B7B] xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="text-[16px] font-[700] lg:text-[20px] text-blue-70">
            198k
            <span className="text-[16px] font-[400] lg:text-[20px] ml-1">
              reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            icon="/play.svg"
            variant="border-[#292C27] bg-[#292C27] px-8 py-5 text-white hover:bg-[#30af5b] hover:border-[#30af5b] transition-all"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="border-white bg-transparent px-8 py-3 text-gray-90 hover:border-[#292C27] transition-all"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-[#292C27] px-7 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[400] text-[#A2A2A2]">
                Location
              </p>
              <Image src="/close2.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-[20px] font-[700] text-white">
              {" "}
              Aguscabana
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-[#A2A2A2]">
                Distance
              </p>
              <p className="text-[20px] font-[700] text-white">
                173.28 mi
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-[#A2A2A2]">
                Elevation
              </p>
              <p className="text-[20px] font-[700] text-white">
                2.040 km
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
