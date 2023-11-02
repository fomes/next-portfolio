import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <AboutSection />
    </>
  );
}
