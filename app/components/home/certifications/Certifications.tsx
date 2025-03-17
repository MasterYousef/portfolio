import CertificationsLogic from "@/app/logic/home/certifications/CertificationsLogic";
import Title from "../../utility/Title";
import CertificationsCard from "./CertificationsCard";

async function Certifications() {
  const logic = await CertificationsLogic();
  return (
    <article id="Certifications">
      <Title text="Certifications" />
      {"error" in logic ? (
        <div className="text-red-500 text-center">
          <p>Failed to load certifications. Please try again later.</p>
        </div>
      ) : (
        <section className="flex flex-wrap h-full justify-center w-full">
          {logic.map((c) => (
            <CertificationsCard key={c.title} data={c} />
          ))}
        </section>
      )}
      <section className="flex flex-wrap w-full my-5 justify-center"></section>
    </article>
  );
}

export default Certifications;
