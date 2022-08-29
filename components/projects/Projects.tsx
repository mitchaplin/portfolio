import projects, { Project } from "../../data/global";
import ProjectCard from "./ProjectCard";

type ProjectProps = {
  overwriteProjects?: Project[];
};

export const Projects = ({ overwriteProjects }: ProjectProps) => {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item: Project) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
};

export default Projects;
