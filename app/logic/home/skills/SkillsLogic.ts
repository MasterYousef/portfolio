import { getData } from "@/hooks/getData";
import { Skill } from "@/types/skills";

async function SkillsLogic(): Promise<Skill[] | { error: string }> {
  const skills = await getData<Skill[]>("skills");
  if ("data" in skills) {
    if (skills.data.length > 0) {
      return skills.data;
    } else {
      return { error: "no skills found" };
    }
  } else {
    return { error: skills?.message || "no skills found" };
  }
}
export default SkillsLogic;
