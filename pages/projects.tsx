import ProjectHeader from "../components/projects/ProjectHeader";
import Projects from "../components/projects/Projects";
import Page from "../components/shared/Page";

const projects = () => {
  return (
    <Page
      defaultPage="Projects"
      meta={{
        title: "Projects",
        desc: "My personal projects",
      }}
    >
      <ProjectHeader />
      <Projects />
    </Page>
  );
};

export default projects;
