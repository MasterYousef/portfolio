"use client";

import { commentCardLogic } from "@/app/logic/comments/commentCardLogic";
import { Comment } from "@/types/comment";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

function CommentCard({
  data,
  setComments,
}: {
  data: Comment;
  setComments: Dispatch<SetStateAction<Comment[]>>;
}) {
  const {
    showDialog,
    isEditing,
    updatedComment,
    setUpdatedComment,
    handleDelete,
    handleUpdate,
    toggleDialog,
    toggleEditing,
    userId,
  } = commentCardLogic(data, setComments);
  return (
    <div className="w-full py-3 h-auto relative flex flex-row items-center lg:text-left border-b-2 overflow-hidden">
      <Image
        src={data.user.image || "/image/default.png"}
        alt="user"
        width={500}
        height={1000}
        className="w-40 h-40 my-5 lg:my-10 rounded-full"
      />
      <div className="flex flex-col w-full lg:w-1/3 mx-5">
        <h2 className="mb-2 text-2xl font-serif">{data.user.username}</h2>
        {isEditing ? (
          <textarea
            className="border p-2 rounded"
            value={updatedComment}
            onChange={(e) => setUpdatedComment(e.target.value)}
          />
        ) : (
          <p>{data.comment}</p>
        )}
      </div>
      {data.user._id === userId ? (
        <div className="absolute flex  top-5 right-0">
          {isEditing ? (
            <div>
              <button className="text-blue-500 mx-2" onClick={handleUpdate}>
                Save
              </button>
              <button className="text-gray-500 mx-2" onClick={toggleEditing}>
                Cancel
              </button>
            </div>
          ) : (
            <i
              className="fa-solid fa-pen mx-2 cursor-pointer"
              onClick={toggleEditing}
            />
          )}
          <i
            className="fa-solid mx-5 fa-trash-can cursor-pointer"
            onClick={toggleDialog}
          />
        </div>
      ) : null}

      {showDialog && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <p>Are you sure you want to delete this comment?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={toggleDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentCard;
