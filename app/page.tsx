import { Suspense } from "react";
import Certifications from "./components/home/certifications/Certifications";
import Landing from "./components/home/Landing";
import Projects from "./components/home/projects/Projects";
import Skills from "./components/home/skills/Skills";
import SkillLoading from "./components/home/skills/SkillLoading";
import ProjectLoading from "./components/home/projects/ProjectLoading";
import CertificationsLoading from "./components/home/certifications/CertificationsLoading";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <Suspense fallback={<SkillLoading />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<ProjectLoading />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<CertificationsLoading />}>
        <Certifications />
      </Suspense>
    </main>
  );
}
