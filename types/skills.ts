interface Skill {
  name: string;
  image: string;
}
interface SkillRes {
  status: string;
  data: Skill[];
}
export type { Skill, SkillRes };
