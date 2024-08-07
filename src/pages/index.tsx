import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Index from "@/components/Index";
import gsap from "gsap";
import Chronicles from "@/components/Chronicles";
import Folio from "@/components/Folio";
import Talk from "@/components/Talk";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const [tab, setTab] = useState("index");
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(".overlay", {
      height: 0,
      duration: 2,
      delay: 0,
      ease: "power4.inOut",
    }).to(".intro", { display: "none" }, "<0.5");
  }, []);

  // useEffect(() => {
  //   let scroll: LocomotiveScroll | undefined;

  //   const initLocomotiveScroll = async () => {
  //     // if (window.innerWidth > 768) {
  //     const locomotiveModule = await import("locomotive-scroll");
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       smoothMobile: true,
  //       resetNativeScroll: true,
  //       lenisOptions: {
  //         wrapper: window,
  //         content: document.documentElement,
  //         lerp: 0,
  //         duration: 1,
  //         orientation: "vertical",
  //         gestureOrientation: "vertical",
  //         smoothWheel: true,
  //         smoothTouch: true,
  //         wheelMultiplier: 1,
  //         touchMultiplier: 0.5,
  //         normalizeWheel: true,
  //         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       },
  //     });
  //     // }
  //   };

  //   initLocomotiveScroll();

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  const Navigate = () => {
    tl.from(".body", {
      opacity: 0,
      duration: 0.7,
      delay: 0,
      ease: "power4.inOut",
    });
  };
  return (
    <>
      <div className="bg-background h-full min-h-screen font-merriweather cursor-crosshair body">
        <nav className="px-10 py-8 border-b-2 border-black flex flex-wrap gap-[10rem] md:gap-[5rem] relative lg:sticky top-0 bg-white z-20">
          <button
            className={`btn-99 !text-black text-[5rem] md:text-[1.5rem]  font-bold ${
              tab === "index" ? "active" : ""
            }`}
            onClick={() => {
              setTab("index");
              Navigate();
            }}
          >
            Index
          </button>
          <button
            className={`btn-99 !text-black text-[5rem] md:text-[1.5rem]  font-bold ${
              tab === "chronicle" ? "active" : ""
            }`}
            onClick={() => {
              setTab("chronicle");
              Navigate();
            }}
          >
            Dams Chronicle
          </button>
          <button
            className={`btn-99 !text-black text-[5rem] md:text-[1.5rem]  font-bold ${
              tab === "folio" ? "active" : ""
            }`}
            onClick={() => {
              setTab("folio");
              Navigate();
            }}
          >
            Folio&apos;24
          </button>
          <button
            className={`btn-99 !text-black text-[5rem] md:text-[1.5rem]  font-bold ${
              tab === "talk" ? "active" : ""
            }`}
            onClick={() => {
              setTab("talk");
              Navigate();
            }}
          >
            Let&apos;s talk
          </button>
        </nav>
        <div className="px-10 h-full" data-scroll-container>
          {tab === "index" ? (
            <Index />
          ) : tab === "chronicle" ? (
            <Chronicles />
          ) : tab === "folio" ? (
            <Folio />
          ) : tab === "talk" ? (
            <Talk />
          ) : null}
        </div>
      </div>
      <div className="overlay fixed w-screen h-screen bg-[#747264] top-0 z-50">
        <div className="flex justify-center items-center h-full w-full font-merriweather">
          <p className="text-[5rem] md:text-[1.5rem] intro uppercase text-white tracking-wider">
            Bawo ni :{")"}
          </p>
        </div>
      </div>
    </>
  );
}
