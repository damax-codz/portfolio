import React, { useEffect } from "react";

const Talk = () => {
  // useEffect(() => {
  //   document.body.style.overflowY = "hidden";
  // });
  return (
    <div className="px-10">
      <p className=" text-[5rem] md:text-[1.5rem] py-[3rem] font-normal tracking-wide">
        Get in touch
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="max-w-full md:max-w-[50%] w-full flex items-center gap-6 flex-wrap">
          <a
            href="mailto:damilolabhadmus41@gmail.com"
            className="text-[24px] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            damilolabhadmus41@gmail.com
          </a>
          <span className="block w-5 h-5 bg-black rounded-full"></span>
          <a
            href="https://www.linkedin.com/in/damilola-bhadmus-351074221/"
            className="text-[24px] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            Linkedin
          </a>
          <span className="block w-5 h-5 bg-black rounded-full"></span>

          <a
            href="https://www.instagram.com/bhadmusdamilola/"
            className="text-[24px] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            Instagram
          </a>
          <span className="block w-5 h-5 bg-black rounded-full"></span>

          <a
            href="https://x.com/Damax_hub"
            className="text-[24px] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            X(twitter)
          </a>
          <span className="block w-5 h-5 bg-black rounded-full"></span>

          <a
            href="https://docs.google.com/document/d/1ExKBihonRofMxuxtZdDTKXV_AiPYWVtYl2YZZucASh4/edit?usp=sharing"
            className="text-[24px] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <img
          src="/picasso.jpg"
          alt="picasso"
          className="w-full md:w-[40%] mt-5"
        />
      </div>
      <div>
        <div className="text-[37rem] tracking-wide font-black ">
          D<div className="rotate-180 inline-block">V</div>MS
        </div>
      </div>
    </div>
  );
};

export default Talk;
