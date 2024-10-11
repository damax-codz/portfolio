import Folio from "@/components/Folio";
import React, { useEffect } from "react";

const Index = () => {
  return (
    <div className="w-full mt-10 md:mt-20">
      <div className="w-full flex flex-col items-start md:flex-row md:items-center px-10">
        <div className="max-w-full md:max-w-[55%] w-full py-[7rem] md:py-0">
          <p className="text-[7rem] md:text-[3rem] font-grt tracking-wide">
            Artisan of the Digital Realm:
            <br /> <b> Bhadmus Damilola</b>, a Frontend Web and Mobile App
            Developer, from the Heart of Lagos, Nigeria
          </p>
          <div className="hidden md:flex">
            <div className="text-[37rem] md:text-[20rem] tracking-wide font-black leading-[200px] md:leading-[15rem] mt-[10rem]">
              D<div className="rotate-180 inline-block">V</div>MS
            </div>
          </div>
        </div>
        <img src="/picasso.jpg" alt="picasso" className="w-full md:w-[40%]" />
        <div className="flex md:hidden">
          <div className="text-[37rem] md:text-[20rem] tracking-wide font-black leading-[200px] md:leading-[15rem] mt-[10rem]">
            D<div className="rotate-180 inline-block">V</div>MS
          </div>
        </div>
      </div>
      <div className="mt-[10rem]">
        <Folio />
      </div>
    </div>
  );
};

export default Index;
