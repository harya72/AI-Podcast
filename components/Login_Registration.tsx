"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const Login_Registration = ({
  heading,
  button_text,
  bottom_text,
  terms_condition,
}: {
  heading: string;
  button_text: string;
  bottom_text: { text: string; link_text: string; href: string };
  terms_condition?: { normalText: string; coloredText: string };
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="w-full bg-primary   flex-1  flex justify-center flex-col  ">
        
      <div className="  max-w-md w-full mx-auto rounded-none md:rounded-2xl border-4 border-secondary p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="text-primary text-3xl font-semibold text-center">
          {heading}
        </h2>

        <div className="flex flex-row gap-8 justify-center mt-4">
          <button className="p-2 rounded-lg bg-white">
            <FcGoogle className="text-4xl" />
          </button>
          <button className="text-[#55ACEE] p-2  rounded-lg bg-white">
            <FaTwitter className="text-4xl" />
          </button>
          <button className="text-[#0E76A8] p-2 px-4 rounded-lg bg-white">
            <FaLinkedinIn className="text-2xl" />
          </button>
          <button className=" p-2  rounded-lg bg-white">
            <IoLogoGithub className="text-4xl" />
          </button>
        </div>
        <div className="flex flex-row w-full items-center gap-2">
          <div className="bg-primary h-[0.25px] w-1/2" />
          <span>Or</span>
          <div className="bg-primary h-[0.25px] w-1/2" />
        </div>
        <form className="my-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="email">Your email</Label>
              <Input
                id="email"
                placeholder="example@gmail.com"
                type="email"
                required
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Your Password</Label>
            <div>
              <Input
                id="password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                required
              />
              <div className=" w-full justify-end flex pr-4 h-0 ">
                {showPassword ? (
                  <IoEye
                    className="relative -top-8 cursor-pointer text-xl"
                    onClick={() => {
                      console.log("hello world");
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <>
                    <FaEyeSlash
                      className="relative -top-8 cursor-pointer text-xl"
                      onClick={() => {
                        console.log("hello world");
                        setShowPassword(!showPassword);
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </LabelInputContainer>
          <div className="flex flex-row gap-2  mb-4">
            {terms_condition ? (
              <>
                <input type="checkbox" className=" rounded-sm checked:bg-primary" />
                <p>
                  {terms_condition.normalText}
                  <span className="text-primary">
                    {" "}
                    {terms_condition.coloredText}
                  </span>
                </p>
              </>
            ) : (
              <div className="flex flex-row justify-end w-full">
                <Link href="/forgetpassword" className="text-primary hover:text-purple-800">Forget your Password?</Link>
              </div>
            )}
          </div>

          <button
            className="bg-gradient-to-br relative group/btn hover:text-purple-800 hover:bg-gray-100 border-primary text-primary border-2 w-full font-bold rounded-md h-10  shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {button_text} &rarr;
          </button>
        </form>
        <p className="text-center text-gray-400 font-semibold">
          {bottom_text && (
            <>
              {bottom_text.text}
              <Link
                href={bottom_text.href}
                className="text-primary font-normal underline underline-offset-4 hover:text-purple-800"
              >
                {bottom_text.link_text}
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Login_Registration;
