"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Certifications } from "@/types/certifications";
function CertificationsCard({ data }: { readonly data: Certifications }) {
  return (
    <motion.div
      className="flex flex-col h-[600px] md:h-[400px] md:flex-row mb-20 w-[90%]  rounded bg-[var(--backGround-alt)]"
      initial={{ scale: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        src={data.image}
        alt={data.image}
        width={1000}
        height={1000}
        className="w-full md:w-1/2 h-1/2 md:h-auto me-5 rounded"
      />
      <div className="p-5 overflow-auto info">
        <h2 className="text-2xl font-bold mb-5">{data.title}</h2>
        <p className="text-xl my-5">{data.company}</p>
        <ul className="list-disc">
          {data.skills.length >= 1
            ? data.skills.map((s) => <li key={s}>{s}</li>)
            : null}
        </ul>
      </div>
    </motion.div>
  );
}

export default CertificationsCard;
