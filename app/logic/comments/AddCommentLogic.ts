"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { postDataWithToken } from "@/hooks/postData";
import { Comment, CommentRes } from "@/types/comment";
import getUserDataHook from "@/hooks/getUserDataHook";
import getComments from "./getComments";

function AddCommentLogic(
  project: string,
  userId: string,
  setComments: Dispatch<SetStateAction<Comment[]>>
) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddComment = async () => {
    if (!comment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    try {
      const res = await getUserDataHook();
      const token = res?.token?.value as any;
      if (!token) {
        toast.error("You must be logged in to add a comment");
        return;
      }
      setLoading(true);
      const response = await postDataWithToken<CommentRes>("/comment", token, {
        comment,
        user: userId,
        project,
      });
      setLoading(false);
      if ("data" in response && response.data.status === "success") {
        toast.success("Comment added successfully");
        const comments = await getComments(project);
        if ("data" in comments) {
          setComments(comments.data);
        }
        setComment("");
      } else {
        toast.error("Failed to add comment");
      }
    } catch (error) {
      toast.error("An error occurred while adding the comment");
    }
  };

  return { comment, setComment, handleAddComment, loading };
}

export default AddCommentLogic;
