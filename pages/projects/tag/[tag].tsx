import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import ProjectHeader from "../../../components/projects/ProjectHeader";
import Projects from "../../../components/projects/Projects";
import Page from "../../../components/shared/Page";
import projects, { allKebabTags, tags } from "../../../data/global";
import { kebabArray, kebabCase } from "../../../data/utils";


export const getStaticPaths: GetStaticPaths = async () => {
  const allTags: any[] = [];
  projects.forEach((project) =>
    project.tags.forEach((tag) => {
      allTags.push(tag);
    })
  );
  const uniqueAllTags = [...new Set(allTags) as any];
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${kebabCase(path)}` },
  }));
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps: any = async ({params}: {params: {tag: string}}) => {
  const tag = params.tag;
  const filteredProjects = projects.filter((project) =>
    [...kebabArray(project.tags)].includes(tag)
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        filteredProjects,
        tag: tag,
      })
    ),
  };
}

export const FilteredProjects = ({ filteredProjects, tag }: any) => {
    const capsTag = tags[allKebabTags.indexOf(tag)];
    return (
      <Page
        defaultPage="Projects"
        meta={{
          title: `${capsTag} Projects`,
          desc: `A showcase for all of my ${capsTag} projects.`,
        }}
      >
        <ProjectHeader tag={capsTag} />
        <Projects overwriteProjects={filteredProjects} />
  
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-white mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-white bg-dark-gray hover:bg-gray-darker hover:text-white transition-colors cursor-pointer">
            View All 
          </div>
        </Link>
      </Page>
    );
  }
  
  export default FilteredProjects;