import Hero from "../components/home/Hero";
import Page from "../components/shared/Page";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a Software Engineer that enjoying creating things.",
      }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        {/* Wrap All Subcomponents in here */}
      </div>
      {/* <Footer /> */}
    </Page>
  );
}
