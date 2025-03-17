interface Certifications {
  title: string;
  company: string;
  image: string;
  skills: string[];
}
interface CertificationsRes {
  status: string;
  data: Certifications[];
}
export type { Certifications, CertificationsRes };
