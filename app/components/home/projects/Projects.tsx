import ProjectLogic from "@/app/logic/home/projects/ProjectsLogic";
import Title from "../../utility/Title";
import ProjectCard from "./ProjectCard";
async function Projects() {
  const logic = await ProjectLogic();
  return (
    <div className="w-full pb-10 px-5" id="projects">
      <Title text="Projects" />
      {"error" in logic ? (
        <div className="text-red-500 text-center">
          <p>Failed to load Projects. Please try again later.</p>
        </div>
      ) : (
        logic.map((d, i) => <ProjectCard data={d} key={i} />)
      )}
    </div>
  );
}

export default Projects;
