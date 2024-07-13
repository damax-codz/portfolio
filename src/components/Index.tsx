import React, { useEffect } from "react";

const Index = () => {
  // useEffect(() => {
  //   document.body.style.overflowY = "hidden";
  // });
  return (
    <div className="w-full mt-10">
      <div className="max-w-full md:max-w-[55%] w-full py-[10rem] md:py-0">
        <p className=" text-[10rem] md:text-[3rem] tracking-wide">
          Artisan of the Digital Realm:
          <br /> <b> Bhadmus Damilola</b>, a Frontend Web and Mobile App
          Developer, from the Heart of Lagos, Nigeria
        </p>
      </div>
      <div>
        <div className="text-[37rem] tracking-wide font-black leading-[200px] md:leading-[420px]">
          D<div className="rotate-180 inline-block">V</div>MS
        </div>
      </div>
    </div>
  );
};

export default Index;
