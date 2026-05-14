import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeBanner } from "@/components/shared/MarqueeBanner";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LabPreview } from "@/components/home/LabPreview";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="gradient-divider" />
      <FeaturedProjects />
      <LabPreview />
      <PhilosophySection />
      <MarqueeBanner />
      <div className="gradient-divider" />
      <ContactCTA />
    </>
  );
}
