import { getData } from "@/hooks/getData";
import { Certifications, CertificationsRes } from "@/types/certifications";

async function CertificationsLogic(): Promise<
  Certifications[] | { error: string }
> {
  const certifications = await getData<CertificationsRes>("certifications");
  if ("data" in certifications) {
    if (certifications.data.length > 0) {
      return certifications.data;
    } else {
      return { error: "no certifications found" };
    }
  } else {
    return { error: certifications?.message || "no certifications found" };
  }
}
export default CertificationsLogic;
