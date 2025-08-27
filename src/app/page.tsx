import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="h-14" />
      <main className="flex-1">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
