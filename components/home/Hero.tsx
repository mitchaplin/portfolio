const Hero = () => {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
          <span className="heroShiny1 text-white">
            Mitch <span className="heroShiny1 text-blue-light">Aplin</span>
          </span>
          <div className="heroShiny1 text-blue-light mb-24">
            Software <span className="heroShiny1 text-white">Engineer</span>
          </div>
          <img
            className="icon lg:block hidden lg:top-[14rem] lg:right-[20rem] w-[6rem]"
            style={{ animationDelay: "0.1s" }}
            src="/static/icons/clojure.png"
          />
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
        </h1>
      </div>
    </>
  );
};

export default Hero;
