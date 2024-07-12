import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex bg-primary h-16 p-8 ">
      <div className="w-1/3" />
      <div className="w-1/3 text-white font-semibold flex justify-around self-center">
        <Link href="/" className="hover:text-secondary hover:scale-110 duration-200">Home</Link>
        <Link href="/explore" className="hover:text-secondary hover:scale-110 duration-200">Explore</Link>
      </div>
      <div className=" w-2/5 flex justify-evenly items-center px-8 text-white font-semibold ">
        <Link href="/signup">
          <span className="px-4 p-2 rounded-md hover:text-purple-700 hover:bg-slate-100  text-primary bg-white">
            Sign up
          </span>
        </Link>
        <Link href="/login" className="hover:text-secondary hover:scale-110 duration-200">Login</Link>
        <Link href="Signup" className="hover:text-secondary hover:scale-110 duration-200">In</Link>
      </div>
    </nav>
  );
};

export default NavBar;
