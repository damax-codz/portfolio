import React from "react";

const Folio = () => {
  return (
    <div className="mt-[10rem] md:mt-10 flex flex-col gap-[10rem] md:gap-[6rem]">
      <div className="w-full">
        <a
          className="w-full md:w-[55%] cursor-pointer h-[70rem] md:h-[40rem] bg-[#333232] flex justify-center items-center"
          target="_blank"
          href="https://edwindcreator.online"
        >
          <div
            style={{
              backgroundImage: "url(/edwin.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "80%",
              width: "80%",
            }}
          ></div>
        </a>
        <p className="text-[6rem]  md:text-[1.4rem] mt-[0.5rem] font-semibold tracking-wide uppercase ">
          Art by Edwin
        </p>
      </div>
      <div className="w-full flex flex-col items-start md:items-end">
        <a
          className="w-full md:w-[60%] cursor-pointer h-[70rem] md:h-[40rem] bg-[#e5ddfe5d] flex justify-center items-center"
          target="_blank"
          href="https://www.majorgen.com/"
        >
          <div
            style={{
              backgroundImage: "url(/major.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "90%",
              width: "90%",
            }}
          ></div>
        </a>
        <p className="text-[6rem]  md:text-[1.4rem] mt-[0.5rem] font-semibold tracking-wide uppercase ">
          Major Gen
        </p>
      </div>

      <div className="w-full flex flex-col items-start">
        <a
          className="w-full md:w-[55%] cursor-pointer h-[70rem] md:h-[40rem] bg-[#54b1942b] flex justify-center items-center"
          target="_blank"
          href="https://grooow.netlify.app/"
        >
          <div
            style={{
              backgroundImage: "url(/groww.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "90%",
              width: "90%",
            }}
          ></div>
        </a>
        <p className="text-[6rem]  md:text-[1.4rem] mt-[0.5rem] font-semibold tracking-wide uppercase ">
          Groow
        </p>
      </div>
      <div className="w-full flex flex-col items-start md:items-end">
        <a
          className="w-full md:w-[60%] cursor-pointer h-[70rem] md:h-[40rem] bg-[#d5d4d4] flex justify-center items-center"
          target="_blank"
          href="https://deduro-avt.netlify.app/"
        >
          <div
            style={{
              backgroundImage: "url(/d.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "90%",
              width: "90%",
            }}
          ></div>
        </a>
        <p className="text-[6rem]  md:text-[1.4rem] mt-[0.5rem] font-semibold tracking-wide uppercase ">
          Deduro
        </p>
      </div>
      <div className="w-full flex flex-col items-start">
        <a
          className="w-full md:w-[55%] cursor-pointer h-[70rem] md:h-[40rem] bg-[#747264] flex justify-center items-center"
          target="_blank"
          href="https://abizzup.netlify.app/"
        >
          <div
            style={{
              backgroundImage: "url(/abizzup.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "90%",
              width: "90%",
            }}
          ></div>
        </a>
        <p className="text-[6rem]  md:text-[1.4rem] mt-[0.5rem] font-semibold tracking-wide uppercase ">
          Abizzup
        </p>
      </div>
      <div className="w-full flex flex-col items-start md:items-end ">
        <a
          className="w-full md:w-[60%] cursor-pointer h-[70rem] md:h-[40rem] bg-[#e1e1fea6] flex justify-center items-center"
          target="_blank"
          href="https://combyn.net"
        >
          <div
            style={{
              backgroundImage: "url(/combyn.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "90%",
              width: "90%",
            }}
          ></div>
        </a>
        <p className="text-[6rem]  md:text-[1.4rem] mt-[0.5rem] font-semibold tracking-wide uppercase ">
          Combyn
        </p>
      </div>
    </div>
  );
};

export default Folio;
