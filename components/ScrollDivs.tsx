import React, { Ref, useEffect, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
interface DataItem {
  text?: string;
  image: string;
  link?: string;
}

interface DataProps {
  data: DataItem[];
}
const ScrollDivs = ({ data }: DataProps) => {
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

      // Cleanup event listeners on component unmount
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);
  return (
    <ScrollContainer
      innerRef={scrollRef}
      vertical={false}
      className="scroll-container"
    >
      <div className="flex flex-row gap-6 ">
        {data.map((item, index) => (
          <div className="flex flex-col min-w-[250px]" key={index}>
            <img
              src={item.image}
              alt={item.text}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{item.text}</h3>
            {/* <a href={item.link}>Link</a> */}
          </div>
        ))}
      </div>
    </ScrollContainer>
  );
};

export default ScrollDivs;
