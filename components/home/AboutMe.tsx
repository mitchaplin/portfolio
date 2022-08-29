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
      <div className="relative w-full mx-auto md:mx-none gap-x-8 l:gap-y-0 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        <p className="text-2xl lg:ml-[30rem] lg:mr-[6rem] lg:mt-[-2rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
