import { getData } from "@/hooks/getData";
import { Project, ProjectsResponse } from "@/types/projects";

async function ProjectLogic(): Promise<Project[] | { error: string }> {
  const projects = await getData<ProjectsResponse>("project");
  if ("data" in projects) {
    if (projects.data.length > 0) {
      return projects.data;
    } else {
      return { error: "no projects found" };
    }
  } else {
    return { error: projects?.message || "no projects found" };
  }
}
export default ProjectLogic;
