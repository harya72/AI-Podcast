"use client";
import ScrollDivs from "@/components/ScrollDivs";
import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import ScrollContainer from "react-indiana-drag-scroll";

const comedy = [
  { image: "./assets/comedy-1.svg" },
  { image: "./assets/comedy-2.svg" },
  { image: "./assets/comedy-3.svg" },
  { image: "./assets/comedy-4.svg" },
  { image: "./assets/comedy-1.svg" },
];

const english = [
  { image: "./assets/english-1.svg" },
  { image: "./assets/english-2.svg" },
  { image: "./assets/english-3.svg" },
  { image: "./assets/english-4.svg" },
];

const spanish = [
  { image: "./assets/spanish-4.svg" },
  { image: "./assets/spanish-2.svg" },
  { image: "./assets/spanish-3.svg" },
  { image: "./assets/spanish-4.svg" },
  { image: "./assets/spanish-5.svg" },
];

const Explore = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const handleWheel = (event: WheelEvent) => {
    if (scrollRef.current) {
      event.preventDefault();
      const scrollAmount = event.deltaY;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.removeEventListener("wheel", handleWheel);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);
  return (
    <section className="">
      <h1 className="text-4xl text-center mt-16">
        Search for what you like the{" "}
        <span className="text-secondary font-extrabold bg-primary ">most</span>
      </h1>
      <div className="max-w-[50%] border-2 flex flex-row items-center p-2 gap-2 border-primary mx-auto mt-16 rounded-full">
        <input
          type="search"
          className="w-full flex-row  focus:outline-none h-full placeholder:text-gray-400  "
          placeholder="Search for music, art, culture..."
        />
        <FaSearch />
      </div>
      <div className="flex mx-auto gap-4 justify-center font-semibold mt-8">
        <img src="./assets/dot.svg" alt="" className="absolute left-20" />
        <span>#rock</span>
        <span>#architecture</span>
        <span>#news</span>
        <span>#art</span>
        <span>#badminton</span>
        <span>#comedy</span>
      </div>
      <div className="max-w-[80%] w-full mx-auto mt-24 gap-24  flex flex-col">
        <div className="gap-4 flex flex-col">
          <h1 className="font-bold tracking-wide text-xl">
            Now on{" "}
            <span className="text-orange-secondary tracking-wide">AIR</span>
          </h1>

          <ScrollContainer
            innerRef={scrollRef}
            vertical={false}
            className="scroll-container"
          >
            <div className="flex flex-row gap-8">
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
              <img
                src="./assets/Ellipse 229.svg"
                alt=""
                className="border-orange-secondary border-4 rounded-full"
              />
            </div>
          </ScrollContainer>
        </div>
        <div className=" w-full gap-4 flex flex-col">
          <h1 className="font-bold  tracking-wide text-xl">In Comedy</h1>
          <ScrollDivs data={comedy} />
        </div>
        <div className=" w-full gap-4 flex flex-col">
          <h1 className="font-bold  tracking-wide text-xl">In English</h1>
          <ScrollDivs data={english} />
        </div>
        <div className=" w-full gap-4 flex flex-col">
          <h1 className="font-bold  tracking-wide text-xl">In Spanish</h1>
          <ScrollDivs data={spanish} />
        </div>
        <div className="  flex justify-between flex-1  flex-row">
          <div className="  ">
            <h1 className="text-2xl font-medium">
              Popular at the{" "}
              <span className="text-secondary font-bold">moment</span>
            </h1>
            <div className="flex flex-col gap-8">
              <div className="flex flex-row my-4 gap-4">
                <img src="./assets/popular.svg" alt="popular" />
                <div>
                  <h1 className="font-bold">
                    ET OMNIS AUT ID{" "}
                    <span className="text-gray-400">15 min</span>
                  </h1>
                  <p className=" text-justify">
                    Et omnis aut id. Aut eaque est quaerat. Doloribus omnis
                    fugit et sit ducimus expedita.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-row my-4 gap-4">
                <img src="./assets/popular.svg" alt="popular" />
                <div>
                  <h1 className="font-bold">
                    ET OMNIS AUT ID{" "}
                    <span className="text-gray-400">15 min</span>
                  </h1>
                  <p className=" text-justify">
                    Et omnis aut id. Aut eaque est quaerat. Doloribus omnis
                    fugit et sit ducimus expedita.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-row my-4 gap-4">
                <img src="./assets/popular.svg" alt="popular" />
                <div>
                  <h1 className="font-bold">
                    ET OMNIS AUT ID{" "}
                    <span className="text-gray-400">15 min</span>
                  </h1>
                  <p className=" text-justify">
                    Et omnis aut id. Aut eaque est quaerat. Doloribus omnis
                    fugit et sit ducimus expedita.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./assets/bulb.png"
              className="relative max-w-[120%]   -right-[7%]  "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
