"use client";
import { useState, useEffect } from "react";
import { Project, ProjectResponse } from "@/types/projects";
import getUserDataHook from "@/hooks/getUserDataHook";
import { deleteDataWithToken } from "@/hooks/useDelete";
import { postDataWithToken } from "@/hooks/postData";
import { toast } from "react-toastify";
import { Comment } from "@/types/comment";
import getComments from "../../comments/getComments";

function ProjectCardLogic(project: Project) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [liked, setLiked] = useState(false);
  const [token, setToken] = useState("");
  const [likesCount, setLikesCount] = useState(project?.likes?.length | 0);
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const fetchUserData = async () => {
    const data = await getUserDataHook();
    if (data?.user) {
      setUserId(data.user._id);
      setToken(data.token.value);
      setLiked(project.likes.includes(data.user._id));
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [project.likes]);
  useEffect(() => {
    getCommentsFunc();
  }, []);
  const getCommentsFunc = async () => {
    const res = await getComments(project._id);
    if ("data" in res) {
      setComments(res.data);
    }
  };
  const toggleLike = async () => {
    if (!userId) return alert("You must be logged in to like a project.");
    if (liked) {
      const res = await deleteDataWithToken<ProjectResponse>(
        `/project/${project._id}/like`,
        token
      );
      if ("data" in res) {
        if (res.data.status === "success") {
          toast.success("Project unlike successfully");
        }
        setLiked(false);
        setLikesCount((prev) => prev - 1);
      } else {
        toast.error("Failed to unlike project");
      }
    } else {
      const res = await postDataWithToken<ProjectResponse>(
        `/project/${project._id}/like`,
        token
      );
      if ("data" in res) {
        setLiked(true);
        setLikesCount(res.data.data.likes.length);
        toast.success("Project liked successfully");
      } else {
        toast.error("Failed to like project");
      }
    }
  };

  return {
    liked,
    toggleLike,
    isOpen,
    setIsOpen,
    likesCount,
    comments,
    setComments,
  };
}

export default ProjectCardLogic;
