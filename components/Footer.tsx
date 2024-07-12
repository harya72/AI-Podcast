import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="w-1/2  flex flex-col items-center p-16">
        <div>
          <Image
            src={"./assets/logo.svg"}
            width={1000}
            height={1000}
            alt="logo"
            objectFit="contain"
            className="max-w-[200px]"
          />
          <h3 className="text-white text-justify mt-8">
            Corporis ut aliquid qui molestiae. Sed laborum sunt recusandae animi
            dolore voluptates.{" "}
          </h3>
          <p className="text-white mt-8">@2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
