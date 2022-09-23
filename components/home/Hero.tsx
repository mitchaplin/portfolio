import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div
        className="heroElem w-full pt-16 m-auto flex justify-center text-left flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
          <div className="grid grid-flow-row">
            <div className="flex items-center flex-col justify-center">
              <img
                className="visible lg:block hidden sm:block w-[12rem] rounded"
                style={{ animationDelay: "0.3s", width: "20%" }}
                src="/static/images/me.jpg"
              />
              <span className=" text-blue-light mt-[1rem]">
                Mitch <span className=" text-blue-light ">Aplin</span>
              </span>

              <div className="flex justify-center text-center">
                <div className=" text-white mt-[1rem]">
                  Software
                  <span className=" text-white"> Engineer</span>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col justify-center">
              <span className=" text-blue-light mt-[1rem]">
                Full <span className=" text-blue-light ">Stack</span>
              </span>
            </div>
          </div>
        </h1>
        <div className="flex flex-row align:left">
          <ScrollLink
            activeClass="active"
            className="lg:block md:block sm:block hidden mr-[2rem] text-blue-light"
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-white border-2 text-xl rounded-full border-blue-light bg-bg-primary  hover:bg-gray-darker hover:text-white">
              <span className=" text-blue-light">More About Me</span>
            </div>
          </ScrollLink>
          <Link className="text-blue-light" href="/projects">
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-white border-2 text-xl rounded-full border-blue-light bg-bg-primary hover:bg-gray-darker hover:text-white">
              <span className=" text-blue-light">My Projects</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
