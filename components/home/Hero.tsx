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
              className="lg:block hidden w-[12rem] mr-[2rem] rounded"
              style={{ animationDelay: "0.3s" }}
              src="/static/images/me.jpg"
            />
            <span className=" text-white mt-[1rem] hover:text-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
              Mitch <span className=" text-blue-light">Aplin</span>
            </span>
            <div className=" text-blue-light mt-[1rem] hover:text-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
              Software
              <span className=" text-white"> Engineer</span>
            </div>
            <span className=" text-white mt-[1rem] hover:text-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
              Full <span className=" text-blue-light ">Stack</span>
            </span>
          </div>
        </h1>{" "}
        <a
          href={"https://google.com"}
          target="_blank"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[14rem] lg:right-[20rem] w-[6rem]"
            style={{ animationDelay: "0.1s" }}
            src="/static/icons/clojure.png"
          />
        </a>
        <img
          className="icon lg:block hidden lg:top-[16rem] lg:right-[6rem] w-[4rem]"
          style={{ animationDelay: "0.2s" }}
          src="/static/icons/js.png"
        />
        <img
          className="icon lg:block hidden lg:bottom-[-24rem] lg:right-[-4rem] w-[12rem]"
          style={{ animationDelay: "0.3s" }}
          src="/static/icons/node.png"
          onClick={() => console.log("clicked")}
        />
        <img
          className="icon lg:block hidden lg:bottom-[-16rem] lg:left-[20rem] w-[6rem]"
          style={{ animationDelay: "0.4s" }}
          src="/static/icons/git.png"
        />
        <img
          className="icon lg:block hidden lg:left-[1rem] lg:bottom-[-18rem] w-[12rem]"
          style={{ animationDelay: "0.5s" }}
          src="/static/icons/postgres.png"
        />
        <img
          className="icon lg:block hidden lg:bottom-[-24rem] lg:right-[32rem] w-[16rem]"
          style={{ animationDelay: "0.6s" }}
          src="/static/icons/prisma.png"
        />
        <img
          className="icon lg:block hidden lg:left-[36rem] lg:bottom-[-12rem] w-[8rem]"
          style={{ animationDelay: "0.7s" }}
          src="/static/icons/react.png"
        />
        <img
          className="icon lg:block hidden lg:top-[36rem] lg:left-[12rem] w-[6rem]"
          style={{ animationDelay: "0.8s" }}
          src="/static/icons/reactnative.png"
        />
        <img
          className="icon lg:block hidden lg:left-[-8rem] lg:bottom-[-10rem] w-[6rem]"
          style={{ animationDelay: "0.9s" }}
          src="/static/icons/ts.png"
        />
        <img
          className="icon lg:block hidden lg:left w-[6rem]"
          style={{ animationDelay: "1.0s" }}
          src="/static/icons/next.png"
        />
        <img
          className="icon lg:block hidden lg:left-[-8rem] lg:bottom-[-10rem] w-[6rem]"
          style={{ animationDelay: "1.1" }}
          src="/static/icons/jira.png"
        />
        <div className="flex flex-row ">
          <Link
            activeClass="active"
            className="mr-[2rem] text-blue-light"
            to="learnmore"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-blue-light bg-bg-primary  hover:bg-gray-darker hover:text-white hover:border-fun-pink">
              <span className=" text-blue-light">More About Me</span>
            </div>
          </Link>
          <Link
            activeClass="active"
            className="mr-[2rem] text-blue-light "
            to="learnmore"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-blue-light bg-bg-primary hover:bg-gray-darker hover:text-white hover:border-fun-pink">
              <span className=" text-blue-light">My Projects</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
