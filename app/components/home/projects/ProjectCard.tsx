"use client";
import ProjectCardLogic from "@/app/logic/home/projects/ProjectCardLogic";
import Image from "next/image";
import Comments from "./Comments";
import { Project } from "@/types/projects";

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
    <>
      <div className="project w-full mb-3 h-96 relative mx-5 rounded-lg">
        <Image
          src={data.image}
          width={500}
          height={500}
          alt="#"
          className="absolute w-full h-full top-0 rounded-lg -z-10"
        />
        <div className="details relative transition-all duration-300 opacity-0 w-full h-full flex flex-col items-center overflow-hidden justify-between p-5 rounded-lg">
          <h2 className="text-2xl font-bold font-mono main-color-text transition-all duration-300 opacity-0 -translate-y-16">
            {data.title}
          </h2>
          <div className="links w-full text-2xl flex justify-evenly opacity-0 transition-all duration-300 translate-y-16">
            <i
              onClick={toggleLike}
              className={` ${
                liked ? "fa-solid" : "fa-regular"
              } fa-heart text-red-500`}
            >
              {"  "}
              {likesCount}
            </i>
            <i
              className="fa-solid fa-comment alt-color-text"
              onClick={() => setIsOpen(true)}
            >
              {" "}
              {comments?.length > 0 ? comments.length : 0}
            </i>
            <a href={data.link} target="_blank">
              <i className="fa-solid fa-link text-zinc-400" />
            </a>
            <a href={data.code} target="_blank">
              <i className="fa-solid fa-code text-white" />
            </a>
          </div>
        </div>
      </div>
      <Comments
        IsOpen={isOpen}
        data={comments}
        setIsOpen={setIsOpen}
        setComments={setComments}
        project={data._id}
      />
    </>
  );
}

export default ProjectCard;
