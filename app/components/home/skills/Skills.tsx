import Title from "@/app/components/utility/Title";
import SkillCard from "./SkillCard";
import SkillsLogic from "@/app/logic/home/skills/SkillsLogic";

async function Skills() {
  const logic = await SkillsLogic();
  return (
    <article className="w-full p-5" id="skills">
      <Title text="Skills" />
      {"error" in logic ? (
        <div className="text-red-500 text-center">
          <p>Failed to load skills. Please try again later.</p>
        </div>
      ) : (
        <section className="flex flex-wrap h-full justify-center w-full">
          {logic.map((s) => (
            <SkillCard key={s.name} title={s.name} image={s.image} />
          ))}
        </section>
      )}
    </article>
  );
}

export default Skills;
