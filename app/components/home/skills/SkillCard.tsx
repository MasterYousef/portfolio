"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const PD = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});
function SkillCard({
  title,
  image,
}: {
  readonly title: string;
  readonly image: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      className={`${PD.className} skill shadow-xl mx-5 my-7 flex gap-3 flex-col justify-center items-center text-3xl  w-56 h-56`}
    >
      <Image
        alt=""
        src={image}
        height={500}
        width={500}
        className="h-1/2 w-1/2"
      />
      {title}
    </motion.div>
  );
}

export default SkillCard;
