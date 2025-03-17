"use client";
import Image from "next/image";
import { User } from "@/types/user";
import useAddCommentLogic from "@/app/logic/comments/AddCommentLogic";
import { Dispatch, SetStateAction } from "react";
import { Comment } from "@/types/comment";

function AddCommentCard({
  project,
  user,
  setComments,
}: {
  project: string;
  user: User;
  setComments: Dispatch<SetStateAction<Comment[]>>;
}) {
  const { comment, setComment, handleAddComment, loading } = useAddCommentLogic(
    project,
    user._id,
    setComments
  );

  return (
    <div className="w-full h-auto py-5 flex items-center border-b-2">
      <Image
        src={user.image || "/image/default.png"}
        alt="user"
        width={500}
        height={1000}
        className="w-40 h-40 my-5 lg:my-10 rounded-full"
      />
      <div className="flex flex-col w-1/2 h-full mx-5">
        <h2 className="mb-2 text-2xl font-serif">{user.username}</h2>
        <textarea
          className="w-auto h-1/2 mb-3 focus-within:outline-[color:var(--main-color)] 
            border-2 rounded resize-none border-[color:var(--alt-color)]"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="button items-end text-white lg:w-1/3"
          onClick={handleAddComment}
          disabled={loading}
        >
          {loading ? "Loading..." : "Comment"}
        </button>
      </div>
    </div>
  );
}

export default AddCommentCard;
