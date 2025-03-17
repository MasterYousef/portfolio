"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Project } from "@/types/projects";
import { ToastContainer } from "react-toastify";
function ProjectContainer({ data }: { readonly data: Project[] }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <motion.div
      initial={{ x: -700 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 1 }}
    >
      <Slider {...settings}>
        {data.length > 0
          ? data.map((p) => <ProjectCard key={p.link} data={p} />)
          : null}
      </Slider>
      <ToastContainer />
    </motion.div>
  );
}

export default ProjectContainer;
