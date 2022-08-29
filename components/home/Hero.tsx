import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div
        className="relative heroElem w-full pt-16 m-auto flex justify-center text-left flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
          <div className="flex">
            <img
              className="visible lg:block hidden sm:block w-[12rem] mr-[2rem] rounded"
              style={{ animationDelay: "0.3s" }}
              src="/static/images/me.jpg"
            />
            <span className=" text-white mt-[1rem] hover:text-blue-light hover:-mt-2 transition-all duration-500 hover:duration-100">
              Mitch <span className=" text-blue-light ">Aplin</span>
            </span>
            <div className=" text-blue-light mt-[1rem] hover:text-blue-light hover:-mt-2 transition-all duration-500 hover:duration-100">
              Software
              <span className=" text-white hover:text-blue-light hover:-mt-2 transition-all duration-500 hover:duration-100">
                {" "}
                Engineer
              </span>
            </div>
            <span className=" text-white mt-[1rem] hover:text-blue-light hover:-mt-2 transition-all duration-500 hover:duration-100">
              Full <span className=" text-blue-light ">Stack</span>
            </span>
          </div>
        </h1>
        <a
          href={"https://clojure.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[38rem] lg:right-[44rem] w-[6rem]"
            style={{ animationDelay: "0.1s" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/clojure/clojure-original.svg"
          />
        </a>
        <a
          href={"https://www.javascript.com/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[38rem] lg:right-[10rem] w-[6rem]"
            style={{ animationDelay: "0.2s" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
        </a>
        <a
          href={"https://nodejs.org/en/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[24rem] lg:right-[14rem] w-[12rem]"
            style={{ animationDelay: "0.3s" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nodejs/nodejs-original-wordmark.svg"
          />
        </a>
        <a
          href={"https://git-scm.com/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[28rem] lg:right-[44rem] w-[6rem]"
            style={{ animationDelay: "0.4s" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
        </a>
        <a
          href={"https://www.postgresql.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[38em] lg:right-[56rem] w-[8rem]"
            style={{ animationDelay: "0.5s" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/postgresql/postgresql-original-wordmark.svg"
          />
        </a>

        <a
          href={"https://reactjs.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[28rem] lg:right-[58rem] w-[6rem]"
            style={{ animationDelay: "0.6s" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </a>
        <a
          href={"https://reactnative.dev/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[28rem] lg:right-[32rem] w-[6rem]"
            style={{ animationDelay: "0.7s" }}
            src="/static/icons/reactnative.png"
          />
        </a>
        <a
          href={"https://www.typescriptlang.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[28rem] lg:right-[4rem] w-[6rem]"
            style={{ animationDelay: "0.8s" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
        </a>
        <a
          href={"https://nextjs.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[36rem] lg:right-[24rem] w-[10rem]"
            style={{ animationDelay: "0.09s" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          />
        </a>

        <div className="flex flex-row">
          <Link
            activeClass="active"
            className="mr-[2rem] text-blue-light"
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-white border-2 text-xl rounded-full border-blue-light bg-bg-primary  hover:bg-gray-darker hover:text-white">
              <span className=" text-blue-light">More About Me</span>
            </div>
          </Link>
          <Link
            activeClass="active"
            className=" text-blue-light"
            to="learnmore"
            spy={true}
            smooth={true}
            duration={500}
          >
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
