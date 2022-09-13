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
          <hr className="mt-2 mb-8" />
          <div id="profile" className="prose">
            <h2 className="section-headline">Profile</h2>
            <hr className="mt-8 mb-8" />
            <p className="text-left">
              Experienced software engineer with a passion for developing
              innovative software that accelerates the efficiency and
              effectiveness of organizational success. Well-versed in modern
              development technologies, procceses, and coding best practices to
              create systems that are reliable and user-friendly. Skilled leader
              who has the proven ability to motivate, educate, collaborate, and
              lead a team of professionals to build and maintain software
              programs. Confident communicator, strategic thinker, and resilient
              engineer to develop software that is customized to meet a
              company's organizational needs, highlight their core competencies,
              and further their success.
            </p>
            <br />
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
                <div className="lg:inline-block lg:w-8/12 w-full lg:text-left md:text-center">
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
                <div className="lg:inline-block lg:w-8/12 w-full lg:text-left md:text-center">
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
                      Developed and maintained user interfaces using React and
                      TypeScript
                    </li>
                    <li>
                      Developed and maintained mobile applications using React
                      Native
                    </li>
                    <li>
                      Created micro-services and APIs using primarily Clojure,
                      Postgres, and Kafka
                    </li>
                    <li>
                      Worked with UX designers to build React component
                      libraries using Storybook; resulting in a design system
                      used across all dev teams
                    </li>
                    <li>
                      Sucessfully completed developer release lead roles during
                      two software release cycles, shepherding all appropriate
                      branches and build artifacts from creation, through the
                      coding and merging processes, and into customers hands
                    </li>
                    <li>
                      Mentored 2 junior developers and 2 interns, training and
                      guiding them through the software development process
                    </li>
                  </ul>
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  <ul className="flex flex-wrap items-center list-none">
                    {softwareEngineer.map((tech: string, idx: number) => {
                      const usedInPersonal = tagPresent(kebabCase(tech));
                      return (
                        <li className="mr-2 mb-2" key={idx}>
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
                <div className="lg:inline-block lg:w-8/12 w-full lg:text-left md:text-center">
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
                <div className="lg:inline-block lg:w-8/12 w-full lg:text-left md:text-center">
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
                  Tools:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full text-left">
                  <ul className="flex flex-wrap items-center list-none">
                    {softwareTestEngineer.map((tech: string, idx: number) => {
                      const usedInPersonal = tagPresent(kebabCase(tech));
                      return (
                        <li className="mr-2 mb-2" key={idx}>
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
