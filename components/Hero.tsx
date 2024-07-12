import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex flex-row bg-primary">
      <div className="w-1/2 flex flex-col items-start pl-16 py-8">
        <Image src="./assets/Logo.svg" alt="logo" width="200" height="200" />
        <h1 className="text-white text-3xl my-2 mt-8">
          LISTENING AND SPEAKING
        </h1>
        <h1 className="text-secondary text-3xl  ">AT THE SAME PLACE!</h1>
        <button className="px-8 font-semibold py-2 mt-8 rounded-3xl border border-black bg-white text-primary text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Start listening for free
        </button>
      </div>
      <div className=" w-full">
        <Image
          src={"./assets/dancing-girl.svg"}
          alt="dancing_girl"
          width={500}
          height={500}
          objectFit="contain"
          className="my-8 mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
