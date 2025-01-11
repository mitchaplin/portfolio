import Image from "next/image";
import Link from "next/link";
import { kebabCase } from "../../data/utils";

export const ProjectCard = ({ project }: any) => {
  return (
    <div
      className="max-w-sm flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl border-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-darker=gray will-change-projectCard`}
      >
        <img className="w-full rounded-md h-40" src={project.img} />
      </a>
      <div className="w-full mt-5">
        <div className="flex flex-grow justify-between">
          <div>
            <a href={project.link || project.github} target="_blank">
              <h3 className="text-lg font-bold">{project.title}</h3>
            </a>
          </div>
          <div className="flex flex-row gap-4 ml-4 mt-1">
            {console.log(project.role)}
            {project.role == "contributor" ? (
              <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300 h-5">
                {project.role}
              </span> ) : (
              <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 h-5">
                {project.role}
              </span>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/static/icons/link.png"
                  width={24}
                  height={24}
                  alt="Github Icon"
                />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/static/icons/github.png"
                  width={24}
                  height={24}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag: string, index: number) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 rounded-lg text-sm bg-blue-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
