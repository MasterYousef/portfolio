"use client";
import { motion } from "framer-motion";
import React from "react";
type prop = {
  text: string;
};
function Title({ text }: prop) {
  return (
    <motion.p
      className="main-color-text w-full mb-30 my-20 text-4xl lg:text-6xl font-medium text-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0.2, 0.4, 0.6, 0.8, 1], scale: 1.2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.p>
  );
}

export default Title;