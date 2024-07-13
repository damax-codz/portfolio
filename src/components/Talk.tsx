import React, { useEffect } from "react";

const Talk = () => {
  // useEffect(() => {
  //   document.body.style.overflowY = "hidden";
  // });
  return (
    <div>
      <p className=" text-[5rem] md:text-[1.5rem] py-[3rem] font-normal tracking-wide">
        Get in touch
      </p>
      <div>
        <div className="max-w-full md:max-w-[50%] w-full flex items-center gap-6 flex-wrap">
          <a
            href="mailto:damilolabhadmus41@gmail.com"
            className="text-[10rem] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            damilolabhadmus41@gmail.com
          </a>
          <span className="block w-5 h-5 bg-black rounded-full"></span>
          <a
            href="https://www.linkedin.com/in/damilola-bhadmus-351074221/"
            className="text-[10rem] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            Linkedin
          </a>
          <span className="block w-5 h-5 bg-black rounded-full"></span>

          <a
            href="https://www.instagram.com/bhadmusdamilola/"
            className="text-[10rem] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            Instagram
          </a>
          <span className="block w-5 h-5 bg-black rounded-full"></span>

          <a
            href="https://x.com/Damax_hub"
            className="text-[10rem] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            X(twitter)
          </a>
          <span className="block w-5 h-5 bg-black rounded-full"></span>

          <a
            href="https://docs.google.com/document/d/1ExKBihonRofMxuxtZdDTKXV_AiPYWVtYl2YZZucASh4/edit?usp=sharing"
            className="text-[10rem] md:text-[3rem] tracking-wide"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
      <div>
        <div className="text-[37rem] tracking-wide font-black leading-[420px]">
          D<div className="rotate-180 inline-block">V</div>MS
        </div>
      </div>
    </div>
  );
};

export default Talk;
