const Hero = () => {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
          <span className="heroShiny1 text-white">
            Mitch <span className="heroShiny1 text-blue-light">Aplin</span>
          </span>
          <img
            className="icon top-[-80rem] right-[5%] sm:top-[5rem] lg:top-[162px] sm:right-[-3rem] w-[8rem]"
            style={{ animationDelay: "0.1s" }}
            src="/static/icons/clojure.png"
          />
          <img
            className="icon top-[8rem] right-[-20rem] w-[6rem]"
            style={{ animationDelay: "0.2s" }}
            src="/static/icons/js.png"
          />
          <img
            className="icon bottom-[-24rem] -right-1/4 sm:right-[-20%] lg:bottom-[-28rem] lg:right-[-32rem] w-[25rem]"
            style={{ animationDelay: "0.3s" }}
            src="/static/icons/node.png"
          />
          <img
            className="icon hidden sm:block bottom-[-12rem] left-[-24rem] w-[8rem]"
            style={{ animationDelay: "0.4s" }}
            src="/static/icons/git.png"
          />
          <img
            className="icon hidden sm:block left-[10rem] lg:left-[5rem] bottom-[-36rem]"
            style={{ animationDelay: "0.5s" }}
            src="/static/icons/postgres.png"
          />
          <img
            className="icon bottom-[-24rem] right-[75%] sm:right-65%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/icons/prisma.png"
          />
          <img
            className="icon left-[-12rem] sm:right-0 bottom-[-36rem] lg:[5%] w-[10rem]"
            style={{ animationDelay: "0.7s" }}
            src="/static/icons/react.png"
          />
          <img
            className="icon sm:block sm:top-[-130px] sm:left-[15%] lg:top-[36rem] lg:left-[32rem] w-[6rem]"
            src="/static/icons/reactnative.png"
          />
          <img
            className="icon left-[-3rem] lg:bottom-[-10rem] sm:bottom-[-100px] sm:left-5  w-[6rem]"
            style={{ animationDelay: "0.9s" }}
            src="/static/icons/ts.png"
          />
        </h1>
      </div>
    </>
  );
};

export default Hero;
