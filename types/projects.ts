interface Project {
  _id: string;
  title: string;
  link: string;
  code: string;
  image: string;
  likes: string[];
}
interface ProjectResponse {
  status: string;
  data: Project;
}
interface ProjectsResponse {
  status: string;
  data: Project[];
}
export type { Project, ProjectResponse, ProjectsResponse };
