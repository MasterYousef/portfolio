import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Comment, CommentRes } from "@/types/comment";
import { toast } from "react-toastify";
import { deleteDataWithToken } from "@/hooks/useDelete";
import { putDataWithToken } from "@/hooks/putData";
import getUserDataHook from "@/hooks/getUserDataHook";
import getComments from "./getComments";

export function commentCardLogic(
  data: Comment,
  setComments: Dispatch<SetStateAction<Comment[]>>
) {
  const [showDialog, setShowDialog] = useState(false);
  const [userId, serUserId] = useState();
  const [token, setToken] = useState<any>("");
  const [isEditing, setIsEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(data.comment);
  useEffect(() => {
    isUser();
  }, []);
  const isUser = async () => {
    const res = await getUserDataHook();
    const tok = res?.token?.value;
    const user = res?.user;
    if (!tok || !user || user._id !== data.user._id) {
      return;
    } else {
      serUserId(user._id);
      setToken(tok);
    }
  };
  const handleDelete = async () => {
    if (!userId) {
      toast.error("You must be logged in to delete a comment");
      return;
    }
    const res = await deleteDataWithToken(`/comment/${data._id}`, token);
    if ("data" in res) {
      toast.success("Comment deleted successfully");
      const comments = await getComments(data.project);
      if ("data" in comments) {
        setComments(comments.data);
      }
    } else {
      toast.error("Failed to delete comment");
    }
    setShowDialog(false);
  };

  const handleUpdate = async () => {
    if (!token) {
      toast.error("You must be logged in to delete a comment");
      return;
    }
    const response = await putDataWithToken<CommentRes>(
      `/comment/${data._id}`,
      {
        comment: updatedComment,
      },
      token
    );
    if ("data" in response) {
      if (response.data.status === "success") {
        toast.success("Comment updated successfully");
        const comments = await getComments(data.project);
        if ("data" in comments) {
          setComments(comments.data);
        }
      } else {
        toast.error("Failed to update comment");
      }
    }
    setIsEditing(false);
  };

  const toggleDialog = () => setShowDialog((prev) => !prev);
  const toggleEditing = () => setIsEditing((prev) => !prev);

  return {
    showDialog,
    isEditing,
    updatedComment,
    setUpdatedComment,
    handleDelete,
    handleUpdate,
    toggleDialog,
    toggleEditing,
    userId,
  };
}
