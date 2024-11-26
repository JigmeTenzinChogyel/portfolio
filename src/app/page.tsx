import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Landing } from "@/components/landing";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/techstack";

export default function Page() {
  return (
    <>
      <Landing />
      <Experience />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
}
