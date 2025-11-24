"use client";
import { motion } from "framer-motion";
import ProjectCardLogic from "@/app/logic/home/projects/ProjectCardLogic";
import Image from "next/image";
import Comments from "./Comments";
import { Project } from "@/types/projects";
import { Playfair_Display } from "next/font/google";
const PD = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function ProjectCard({ data }: { readonly data: Project }) {
  const {
    liked,
    toggleLike,
    isOpen,
    setIsOpen,
    likesCount,
    comments,
    setComments,
  } = ProjectCardLogic(data);
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="project my-28 flex lg:flex-row flex-col lg:justify-start items-center"
    >
      <Image
        src={data.image}
        height={1000}
        width={1000}
        alt=""
        className="lg:w-[40rem] w-[90%] h-[20rem] lg:h-[30rem] mx-5 rounded-lg"
      />
      <div className="lg:ms-16 ms-0">
        <p className={`${PD.className} mb-30 my-20 text-4xl `}>{data.title}</p>
        {"features" in data
          ? data.features.map((e, i) => (
              <p key={i} className="mb-5">
                ● {e}
              </p>
            ))
          : null}
        <div className="flex gap-10 mt-20">
          <i
            onClick={toggleLike}
            className={`pr-btn fa-heart ${
              liked
                ? "bg-red-500 fa-solid text-white bg-gradient-to-r hover:bg-gradient-to-br from-red-400 via-red-500 to-red-600"
                : " bg-white fa-regular text-red-500 hover:bg-red-500 hover:text-white"
            }  border-2 border-red-500  `}
          >
            {" "}
            {likesCount}
          </i>
          <i
            onClick={() => setIsOpen(true)}
            className="pr-btn fa-solid fa-comment border-2 border-cyan-400 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br"
          >
            {" "}
            {comments?.length > 0 ? comments.length : 0}
          </i>
          <a href={data.link} target="_blank">
            <i className="fa-solid fa-link text-zinc-400 pr-btn border-2 border-teal-500 bg-teal-600"></i>
          </a>
          <a href={data.code} target="_blank">
            <i className="fa-brands fa-github text-white pr-btn border-2 border-[#0f1419] bg-[#0f1419]"></i>
          </a>
        </div>
      </div>
      <Comments
        IsOpen={isOpen}
        setIsOpen={setIsOpen}
        data={comments}
        project={data._id}
        setComments={setComments}
      />
    </motion.div>
  );
}

export default ProjectCard;
