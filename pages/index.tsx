import Hero from "../components/home/Hero";
import Page from "../components/shared/Page";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a Software Engineer that enjoys creating things and solving problems.",
      }}
    >
      <Hero />
      <div className="space-y-32">test</div>
    </Page>
  );
}
