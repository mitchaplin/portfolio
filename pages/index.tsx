import AboutMe from "../components/home/AboutMe";
import Experience from "../components/home/Experience";
import Hero from "../components/home/Hero";
import Page from "../components/shared/Page";

export default function Home() {
  return (
    <Page
      defaultPage="Home"
      meta={{
        desc: "I'm a Software Engineer that enjoys creating things and solving problems.",
      }}
    >
      <Hero />
      <div className="mt-[32rem] space-y-32">
        <AboutMe />
        <Experience />
      </div>
    </Page>
  );
}
