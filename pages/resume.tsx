import Resume from "../components/resume/Resume";
import ResumeHeader from "../components/resume/ResumeHeader";
import Page from "../components/shared/Page";

const resume = () => {
  return (
    <Page
      defaultPage="Resume"
      meta={{
        title: "Resume",
        desc: "My resume",
      }}
    >
      <ResumeHeader />
      <Resume />
    </Page>
  );
};

export default resume;
