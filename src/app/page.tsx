import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeatureBar } from "@/components/sections/FeatureBar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { News } from "@/components/sections/News";
import { StatsBar } from "@/components/sections/StatsBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureBar />
        <About />
        <Services />
        <Projects />
        <StatsBar />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
