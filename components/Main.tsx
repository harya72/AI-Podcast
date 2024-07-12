import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <main className="mt-16">
        <h1 className="text-6xl text-center 2xl:text-[120px]">
          Hear what matters{" "}
          <span className="font-extrabold bg-primary px-2 text-secondary text-6xl 2xl:text-[120px]">
            most to you!
          </span>
        </h1>
        <div className="bg-green-300">
          <Image
            src={"./assets/dot.svg"}
            alt="dot"
            width={1000}
            className="absolute left-28 max-w-[200px] 2xl:max-w-[350px] "
            height={1000}
            objectFit="contain"
          />
        </div>

        <div className=" text-center flex justify-center mt-8 ">
          <div className=" max-w-[50%] 2xl:max-w-[80%]">
            <h2 className="text-3xl 2xl:text-6xl   ">
              eVOZ brings together live sports, music, news, trainning and many
              more!
            </h2>
          </div>
        </div>
        <div className="flex justify-center mt-24">
          <div className=" mx-auto max-w-[80%] w-full flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-8  ">
              <div className="">
                <Image
                  src={"./assets/frame.svg"}
                  alt="frame"
                  width={1000}
                  height={1000}
                  objectFit="contain"
                />
              </div>
              <div className="">
                <Image
                  src={"./assets/frame.svg"}
                  alt="frame"
                  width={1000}
                  height={1000}
                  objectFit="contain"
                />
              </div>
              <div className="">
                <Image
                  src={"./assets/frame.svg"}
                  alt="frame"
                  width={1000}
                  height={1000}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="col-span-8  max-h-[300px] h-full">
                <Image
                  src={"./assets/plainImg.svg"}
                  alt="frame"
                  width={1000}
                  height={1000}
                  objectFit="contain"
                />
              </div>
              <div className="col-span-4 ">
                <Image
                  src={"./assets/frame.svg"}
                  alt="frame"
                  width={1000}
                  height={1000}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="col-span-4  ">
                <Image
                  src={"./assets/frame.svg"}
                  alt="frame"
                  width={1000}
                  height={1000}
                  objectFit="contain"
                />
              </div>
              <div className="col-span-8  max-h-[300px] h-full">
                <Image
                  src={"./assets/plainImg.svg"}
                  alt="frame"
                  width={1000}
                  height={1000}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/explore" className="px-8 font-semibold py-2 mt-8 mb-8 rounded-3xl border border-black bg-white text-primary text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Explore for more
          </Link>
        </div>
        <div className=" flex justify-center flex-row ">
          <div className="max-w-[80%] flex flex-row ">
            <Image src={"./assets/06.svg"} width={500} height={500} alt="img" />
            <div className="py-8 flex flex-col pl-8">
              <h1 className="text-4xl">LISTEN</h1>
              <p className="text-5xl font-semibold text-primary">
                EVERY
                <span className="text-secondary bg-primary p-[0.1px]">
                  WHERE
                </span>
              </p>
              <p className="max-w-[80%] mt-16 text-xl">
                Et omnis aut id. Aut eaque est quaerat. Doloribus omnis fugit et
                sit ducimus expedita. Et iure minima enim est earum voluptas
                occaecati.
                <br />
                Connect with all your devices like Alexa, Google Home or your
                car.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="flex flex-row justify-end">
        <Image
          src={"./assets/dot.svg"}
          className="relative right-80 -bottom-8  max-w-[200px] 2xl:max-w-[350px]"
          alt="dot"
          width={1000}
          height={1000}
        />
      </div>
      <h1 className="text-5xl text-center">
        <span className="text-secondary bg-primary">CUSTOMIZE</span> YOUR SKINS!
      </h1>
      <div className=" flex flex-row mx-20 justify-evenly">
        <div className=" w-full flex flex-col items-center max-w-[50%]">
          <img
            src={"./assets/player.svg"}
            alt="player"
            className="   z-10 max-h-[250px]"
          />

          <img
            src={"./assets/playerblue.svg"}
            alt="blueplayer"
            className=" z-0 relative -top-36 left-28 max-h-[250px] w-full"
          />
          <img
            src="./assets/text.svg"
            alt=""
            className="object-contain absolute mt-[20rem] mr-[10rem]  "
          />
          <img
            src="./assets/arrow.svg"
            alt=""
            className="object-contain absolute mt-[18rem] ml-[12rem] "
          />
        </div>
        <div className="flex justify-center ">
          <img
            src="./assets/lady.svg"
            alt=""
            className="object-contain max-h-[500px]"
          />
        </div>
      </div>

      <div className=" items-center flex flex-row justify-center">
        <button className="px-8 mb-16 font-semibold py-2 my-8   rounded-3xl border border-black bg-white text-primary text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Start listening for free
        </button>
      </div>
    </>
  );
};

export default Main;
