import Link from "next/link";
import { allKebabTags } from "../../data/global";
import { kebabCase } from "../../data/utils";

const tagPresent = (tag: string): boolean => allKebabTags.includes(tag);
const softwareEngineer = [
  "React",
  "Typescript",
  "Javascript",
  "Clojure",
  "Git",
  "GitLab",
  "PostgresQL",
  "Docker",
  "React-Native",
];

const softwareTestEngineer = [
  "Groovy",
  "Git",
  "GitLab",
  "Selenium",
  "Jira",
  "PostgresQL",
  "Rest",
];

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
              Software Engineer
            </h2>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4 text-blue-light">
              Contact
            </h2>
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
            <h2 className="text-xl font-semibold mb-4 text-blue-light">
              On the Web
            </h2>
            <div className="flex items-center my-3">
              <img
                src="/static/icons/github-logo-white.png"
                className="inline w-6 mr-4 text-color-white"
                alt="GitHub Logo"
              />
              <a
                href="https://github.com/mitchaplin"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center my-3">
              <img
                src="/static/icons/linkedin.png"
                className="inline w-6 mr-4"
                alt="LinkedIn Logo"
              />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center my-3">
              <img
                src="/static/icons/folio.png"
                className="inline w-6 mr-4"
                alt="Globe icon"
              />
              <a href="/" rel="noopener noreferrer">
                Portfolio
              </a>
            </div>
          </div>
          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4 text-blue-light">
              Education
            </h2>
            <div className="grid grid-col items-left my-3">
              <div className="grid-col text-left">B.S., Computer Science</div>
              <div className="flex-row text-left">
                University of Wisconsin-La Crosse
              </div>
              <div className="flex-row text-left">
                September 2010 - May 2015
              </div>
              <div className="flex-row text-left">La Crosse, Wisconsin</div>
            </div>
          </div>
          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4 text-blue-light">
              Skills
            </h2>
            <div className="grid grid-col items-left my-3">
              <div className="grid-col text-left">React</div>
              <div className="grid-col text-left">Typescript</div>
              <div className="grid-col text-left">Javascript</div>
              <div className="grid-col text-left">Clojure</div>
              <div className="grid-col text-left">Git</div>
              <div className="grid-col text-left">React Native</div>
              <div className="grid-col text-left">PostgresQL</div>
            </div>
          </div>
          <div className="font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4 text-blue-light">
              Tools
            </h2>
            <div className="grid grid-col items-left my-3">
              <div className="grid-col text-left">Github</div>
              <div className="grid-col text-left">GitLab</div>
              <div className="grid-col text-left">Jira</div>
              <div className="grid-col text-left">Docker</div>
              <div className="grid-col text-left">CI/CD</div>
              <div className="grid-col text-left">Jest</div>
              <div className="grid-col text-left"></div>
            </div>
          </div>
        </div>
        <div className="content w-full p-12">
          <div id="profile" className="prose">
            <h2 className="section-headline">Profile</h2>
            <hr className="mt-8 mb-8" />
            <p className="text-left">
              Proven Software Engineer with 4+ years of development experience,
              paired with 3+ years of test automation experience. As a dedicated
              problem solver, I display an expert skill in Javascript and
              supporting languages / libraries / frameworks that solve real
              world problems through code. Through my experience at Singlewire
              Software, I have attained hands-on experience in industry standard
              development, and have seen several mission critical projects
              through from inception to deployment.
            </p>
            <br />
            <p className="text-left">
              I am highly motivated in expanding my horizons day by day for
              better performance, testing and user experience. Lifetime Learning
              is a mantra I deeply subscribe to.
            </p>
          </div>
          <hr className="mt-8 mb-8" />

          <h2 className="section-headline">Experience</h2>
          <hr className="mt-8 mb-8" />
          <div id="experience" className="prose">
            <div>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Employer:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  <a
                    href="https://singlewire.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Singlewire Software
                  </a>
                </div>
              </section>

              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  <div>Present</div>
                  <div>-</div>
                  <div>Nov. 2018</div>
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  Software Engineer
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Task:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  <ul className="list-disc">
                    <li>
                      Developing and maintaining user interfaces using React and
                      TypeScript
                    </li>
                    <li>
                      Developing and maintaining mobile applications using React
                      Native
                    </li>
                    <li>
                      Creating micro-services and APIs using primarily Clojure,
                      Postgres, and Kafka
                    </li>
                    <li>
                      Working with UX designers to build React component
                      libraries using Storybook; resulting in a pseudo design
                      system used across all dev teams
                    </li>
                    <li>
                      Acted as developer release lead during two successful
                      software releases, shepherding all appropriate branches
                      and build artifacts over the finishing line for a given
                      release
                    </li>
                    <li>
                      Mentored 2 junior developers and 2 interns; Familiarized
                      them with the software development process
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  As a full stack engineer, I've worn many hats during my 4+
                  years at Singlewire Software. I have been privileged to be a
                  part of several diverse teams, and worked on many truly unique
                  and interesting projects. Some of these include React porting
                  from Angular.js, integration efforts with many different
                  companies including Microsoft, Twilio, Bandwidth, and
                  RapidSOS, and microservice creation.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  <ul className="flex flex-wrap items-center list-none">
                    {softwareEngineer.map((tech: string) => {
                      const usedInPersonal = tagPresent(kebabCase(tech));
                      return (
                        <li className="mr-2 mb-2">
                          <Link
                            href={
                              usedInPersonal
                                ? `/projects/tag/${kebabCase(tech)}`
                                : "/resume"
                            }
                            scroll={usedInPersonal}
                          >
                            <div
                              className={`rounded-lg text-sm bg-${
                                usedInPersonal
                                  ? "blue-dark cursor-pointer"
                                  : "bg-primary"
                              } py-1 px-2 hover:opacity-75`}
                            >
                              {tech}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <hr className="mt-8 mb-8" />
          <div id="experience" className="prose">
            <div>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Employer:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  <a
                    href="https://singlewire.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Singlewire Software
                  </a>
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  <div>Nov. 2018</div>
                  <div>-</div>
                  <div>Jul. 2015</div>
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  Software Test Engineer
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Task:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  <ul className="list-disc">
                    <li>
                      Developed and maintained the web client test suite, using
                      Selenium Web Driver
                    </li>
                    <li>
                      Developed and maintained the API testing client, written
                      in the Groovy language
                    </li>
                    <li>
                      Worked efficiently in a collaborative team atmosphere,
                      converting good communication with team members and
                      dedicated work ethic into quantifiable results
                    </li>
                    <li>
                      Developed and maintained testing environments for other
                      members of the team, ensuring correctness for both
                      testbeds and code builds therein
                    </li>
                    <li>
                      Guided several full release cycles from early stages to
                      successful first customer ship, creating and executing
                      efficient and repeatable test plans.
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  As a software test engineer my goal was to automate as much as
                  possible, cast the widest net, and find bugs before they
                  reached manual testers or production. As one of four key
                  automation engineers, we achieved a test suite that contained
                  over 30,000 comprehensive tests that ran against our builds
                  nightly. These generated build reports provided excellent
                  feedback for management and developers on status of current
                  work, and is now a staple of the development process at
                  Singlewire Software.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  <ul className="flex flex-wrap items-center list-none">
                    {softwareTestEngineer.map((tech: string) => {
                      const usedInPersonal = tagPresent(kebabCase(tech));
                      return (
                        <li className="mr-2 mb-2">
                          <Link
                            href={
                              usedInPersonal
                                ? `/projects/tag/${kebabCase(tech)}`
                                : "/resume"
                            }
                            scroll={usedInPersonal}
                          >
                            <div
                              className={`rounded-lg text-sm bg-${
                                usedInPersonal
                                  ? "blue-dark cursor-pointer"
                                  : "bg-primary"
                              } py-1 px-2 hover:opacity-75`}
                            >
                              {tech}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
