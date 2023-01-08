export const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="flex flex-col md:flex-col justify-between relative"
    >
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0">
        About Me
        <br />
      </h2>
      <div className="relative w-full mx-auto md:mx-none gap-x-8 l:gap-y-0 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 text-left place-content-center">
        <p className="text-2xl lg:ml-[32rem] lg:mr-[6rem] lg:mt-[-2rem]">
          Proven Software Engineer with 7+ years of development experience. As a
          dedicated problem solver, I display an expert skill across the stack
          and supporting frameworks that solve real world problems through code.
          Utilizing the vast array of experience at Singlewire Software, I have
          attained hands-on experience in an industry standard development
          process, and have seen several mission critical projects through from
          inception to deployment.
        </p>
        <br />
        <div className="m-8" />
        <p className="text-2xl lg:ml-[32rem] lg:mr-[6rem] lg:mt-[-2rem]">
          I am highly motivated in expanding my horizons day by day for better
          performance, testing and user experience. <i>Lifetime Learning</i> is
          a mantra I deeply subscribe to.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
