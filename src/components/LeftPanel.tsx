import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';

export const LeftPanel = () => {
  return (
    <div className="w-full lg:w-[60%] min-h-screen px-6 md:px-12 lg:px-16 pt-20 lg:pt-12 pb-12">
      <div className="max-w-4xl mx-auto">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};
