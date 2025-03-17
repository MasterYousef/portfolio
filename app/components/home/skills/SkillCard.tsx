"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function SkillCard({
  title,
  rate,
}: {
  readonly title: string;
  readonly rate: number;
}) {
  const [count, setCount] = useState(0);

  const setRate = () => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= rate) {
          clearInterval(interval);
          return rate;
        }
        return Math.min(prev + 1, rate);
      });
    }, 20);
    return () => clearInterval(interval);
  };
  return (
    <motion.div
      initial={{ scale: 1 }}
      viewport={{ once: true }}
      whileInView={{ scale: 1 }}
      onAnimationComplete={() => setRate()}
      className="skill relative mx-5 my-7 flex justify-center items-center text-3xl rounded-full w-56 h-56 bg-alt"
    >
      <motion.div
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        style={{
          background: `conic-gradient(rgb(167 139 250 / 1) 0% ${count}%, #ddd 0% 100%)`,
        }}
        className="circle"
      ></motion.div>
      {title}
      <p>{rate}%</p>
    </motion.div>
  );
}

export default SkillCard;
