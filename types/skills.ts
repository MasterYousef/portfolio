interface Skill {
  name: string;
  count: number;
}
interface SkillRes {
  status: string;
  data: Skill[];
}
export type { Skill, SkillRes };
