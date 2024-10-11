/* eslint-disable @next/next/no-img-element */
import React from "react";

const Folio = () => {
  const folio = [
    {
      title: "Dezin: Digital Product and Brand Design Academy",
      image: "/dezin.png",
      link: "https://dezinacademy.com/",
      year: "©web|2024",
    },
    {
      title: " Art by Edwin: Edwin Anthony portfolio site",
      image: "/edwin.png",
      link: "https://edwindcreator.online",
      year: "©web|2024",
    },
    {
      title: "  Major Gen:AI powered resume creator platform",
      image: "/major.png",
      link: "https://www.majorgen.com/",
      year: "©web|2024",
    },
    {
      title: "Deduro:fan site for adeduro tobiloba avt",
      image: "/d.png",
      link: "https://deduro-avt.netlify.app/",
      year: "©web|2022",
    },
  ];
  return (
    <div className="mt-[10rem] md:mt-20  px-20">
      <p className="font-grt uppercase text-[20px] md:text-[2.5rem] font-medium leading-[20px] md:leading-10 mb-10 text-[#252422] ">
        Projects
        <br /> over the years
      </p>
      <div className="flex flex-col">
        {folio.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            key={index}
            className="flex flex-col md:flex-row py-10 md:py-5  box-content border-t-[1px] cursor-pointer group border-black items-start"
          >
            <div
              className="overflow-hidden w-full md:w-[50%] mr-5"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full scale-105 group-hover:scale-100 duration-300"
              />
            </div>

            <div className="w-full md:w-2/4 flex flex-col justify-between items-start md:items-end ps-0 md:ps-20 mt-[10px] md:mt-0">
              <p className="text-[16px] md:text-[2.5rem] text-start md:text-end font-medium uppercase tracking-wide group-hover:underline duration-300 font-grt text-[#252422]">
                {project.title}
              </p>
              <p className="text-[12px] md:text-[0.9rem] text-end font-medium uppercase tracking-wide font-grt text-[#252422]">
                {project.year}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Folio;
