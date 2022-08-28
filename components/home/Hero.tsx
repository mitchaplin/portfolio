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
        </h1>
        <a
          href={"https://clojure.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[36rem] lg:right-[20rem] w-[6rem]"
            style={{ animationDelay: "0.1s" }}
            src="/static/icons/clojure.png"
          />
        </a>
        <a
          href={"https://www.javascript.com/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[28rem] lg:right-[12rem] w-[4rem]"
            style={{ animationDelay: "0.2s" }}
            src="/static/icons/js.png"
          />
        </a>
        <a
          href={"https://nodejs.org/en/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[36rem] lg:right-[4rem] w-[12rem]"
            style={{ animationDelay: "0.3s" }}
            src="/static/icons/node.png"
          />
        </a>
        <a
          href={"https://git-scm.com/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[32rem] lg:right-[42rem] w-[6rem]"
            style={{ animationDelay: "0.4s" }}
            src="/static/icons/git.png"
          />
        </a>
        <a
          href={"https://www.postgresql.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:left-[1rem] lg:bottom-[-18rem] w-[12rem]"
            style={{ animationDelay: "0.5s" }}
            src="/static/icons/postgres.png"
          />
        </a>
        <a
          href={"https://www.prisma.io/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:bottom-[-24rem] lg:right-[32rem] w-[16rem]"
            style={{ animationDelay: "0.6s" }}
            src="/static/icons/prisma.png"
          />
        </a>
        <a
          href={"https://reactjs.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:left-[36rem] lg:bottom-[-12rem] w-[8rem]"
            style={{ animationDelay: "0.7s" }}
            src="/static/icons/react.png"
          />
        </a>
        <a
          href={"https://reactnative.dev/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[20rem] lg:left-[6rem] w-[6rem]"
            style={{ animationDelay: "0.8s" }}
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
            className="icon lg:block hidden lg:top-[20rem] lg:right-[8rem] w-[6rem]"
            style={{ animationDelay: "0.9s" }}
            src="/static/icons/ts.png"
          />
        </a>
        <a
          href={"https://nextjs.org/"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[40rem] lg:right-[48rem] w-[10rem]"
            style={{ animationDelay: "1.0s" }}
            src="/static/icons/next.png"
          />
        </a>
        <a
          href={"https://www.atlassian.com/software/jira"}
          target="_blank"
          rel="noreferrer noopener"
          className="items-left flex"
        >
          <img
            className="icon lg:block hidden lg:top-[25rem] lg:left-[16rem] w-[6rem]"
            style={{ animationDelay: "1.1" }}
            src="/static/icons/jira.png"
          />
        </a>
        <div className="flex flex-row">
          <Link
            activeClass="active"
            className="mr-[2rem] text-blue-light"
            to="learnmore"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-blue-light bg-bg-primary  hover:bg-gray-darker hover:text-white">
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
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-blue-light bg-bg-primary hover:bg-gray-darker hover:text-white">
              <span className=" text-blue-light">My Projects</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
