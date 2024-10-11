/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Chronicles = () => {
  return (
    <div className="w-full mt-5 px-10">
      <div className="max-w-full md:max-w-[55%] w-full">
        <p className="text-[7rem] md:text-[3rem] font-grt  tracking-wide py-[10rem] md:py-0">
          Artisan of the Digital Realm:
          <br /> <b> Bhadmus Damilola</b>, a Frontend Web and Mobile App
          Developer, from the Heart of Lagos, Nigeria
        </p>
      </div>
      <p className="text-[5rem] md:text-[1.5rem] py-[3rem] font-extralight tracking-wide">
        My mantra
      </p>
      <div className="max-w-full md:max-w-[55%] w-full">
        <p className="text-[7rem] md:text-[3rem] font-grt  tracking-wide py-[10rem] md:py-0">
          In three years of mastering the art of coding, I’ve learned that true
          confidence and skill come not from having written every line of code,
          but from the belief that I can.
        </p>
      </div>
      <a
        className="text-[5rem] mb-[10rem] md:mb-0 md:text-[1.5rem] mt-[3rem] font-extralight tracking-wide flex items-center gap-1 cursor-pointer"
        target="_blank"
        href="https://docs.google.com/document/d/1ExKBihonRofMxuxtZdDTKXV_AiPYWVtYl2YZZucASh4/edit?usp=sharing"
      >
        My Resume
        <img
          src="/down-arrow.png"
          alt="arrow"
          className="w-[30px] -rotate-90"
        />
      </a>
    </div>
  );
};

export default Chronicles;
