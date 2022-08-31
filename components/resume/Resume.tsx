import resume from "../../pages/Resume";

export const Resume = () => {
  return (
    <>
      <main
        id="wrapper"
        className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl rounded-lg bg-blue-light"
      >
        <div
          id="sidebar"
          className="w-full sm:max-w-sm p-8 bg-black rounded-r-lg"
        >
          <div className="px-2 mb-12">
            <img
              src="/static/images/me.jpg"
              alt="Profile Picture"
              className="rounded-full w-48 mx-auto mb-2"
            />
            <h1 className="text-center text-3xl font-semibold mb-2">
              Mitch Aplin
            </h1>
            <h2 className="text-center text-xl font-light">
              Fullstack Developer
            </h2>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="flex items-center my-3">
              <img
                src="/static/icons/mail.png"
                className="inline w-6 mr-4"
                alt="Mail icon"
              />
              <a href="mailto:">mitchaplin@gmail.com</a>
            </div>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">On the Web</h2>
            <div className="flex items-center my-3">
              <img
                src="/static/icons/github.png"
                className="inline w-6 mr-4 text-color-white"
                alt="GitHub Logo"
              />
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

            <div className="flex items-center my-3">
              <img
                src="/static/icons/linkedin.png"
                className="inline w-6 mr-4"
                alt="LinkedIn Logo"
              />
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center my-3">
              <img
                src="/static/icons/folio.png"
                className="inline w-6 mr-4"
                alt="Globe icon"
              />
              <a href="#" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="content w-full p-12">
          <div id="profile" className="prose">
            <h2 className="section-headline">Profile</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              I am highly motivated in expanding my horizons day by day for
              better performance, testing and user experience.
            </p>
          </div>
          <hr className="mt-8 mb-12" />
          <div id="experience" className="prose">
            <h2 className="section-headline">Experience</h2>
            <div>
              <h3>Singlewire Software</h3>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Jul.&nbsp;2019:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Fullstack Developer
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Task:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <span className="rounded-xl bg-gray-300 px-3">Docker</span>
                  <span className="rounded-xl bg-gray-300 px-3">Git</span>
                  <span className="rounded-xl bg-gray-300 px-3">Gitlab</span>
                  <span className="rounded-xl bg-gray-300 px-3">Jira</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>{" "}
    </>
  );
};

export default Resume;
