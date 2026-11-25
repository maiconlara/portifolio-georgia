import type { Metadata } from "next";
import { EducationSection } from "@/components/experience/education-section";
import { ExperienceList } from "@/components/experience/experience-list";
import { SkillGroups } from "@/components/experience/skill-groups";
import { PageHeader } from "@/components/page-header";
import { PageTransition } from "@/components/page-transition";
import { EXPERIENCE } from "@/config/experience";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Experiência",
  description: "Onde a Ge trabalhou, o que estudou e as ferramentas que usa.",
  path: "/experiencia/",
});

export default function ExperiencePage() {
  return (
    <PageTransition>
      <PageHeader title={EXPERIENCE.intro.title} lead={EXPERIENCE.intro.lead} />
      <ExperienceList title={EXPERIENCE.jobsTitle} jobs={EXPERIENCE.jobs} />
      <SkillGroups title={EXPERIENCE.skillsTitle} groups={EXPERIENCE.skills} />
      <EducationSection
        educationTitle={EXPERIENCE.educationTitle}
        education={EXPERIENCE.education}
        languagesTitle={EXPERIENCE.languagesTitle}
        languages={EXPERIENCE.languages}
      />
    </PageTransition>
  );
}
