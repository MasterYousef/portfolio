"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import AddCommentCard from "./AddCommentCard";
import { Comment } from "@/types/comment";
import getUserDataHook from "@/hooks/getUserDataHook";

function Comments({
  IsOpen,
  setIsOpen,
  data,
  project,
  setComments,
}: {
  IsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: Comment[];
  project: string;
  setComments: Dispatch<SetStateAction<Comment[]>>;
}) {
  const [user, setUser] = useState<any>();
  const getUser = async () => {
    const res = await getUserDataHook();
    if (res?.user) {
      setUser(res.user);
    } else {
      setUser(undefined);
    }
  };
  useEffect(() => {
    if (IsOpen) {
      getUser();
    }
  }, [IsOpen]);
  return (
    <Dialog
      as="div"
      open={IsOpen}
      className="fixed inset-0 z-50 flex  items-center justify-center"
      onClose={() => null}
    >
      <div className="fixed inset-0 bg-overlay"></div>
      <DialogPanel className="bg-white comments relative w-full lg:w-3/4 h-full lg:h-3/4 p-4 rounded z-10 flex flex-wrap justify-center items-center overflow-auto">
        {user ? (
          <AddCommentCard
            user={user}
            project={project}
            setComments={setComments}
          />
        ) : null}
        {data.length > 0
          ? data.map((e) => (
              <CommentCard setComments={setComments} data={e} key={e._id} />
            ))
          : null}
        <i
          onClick={() => setIsOpen(false)}
          className="fa-regular fa-circle-xmark text-4xl cursor-pointer text-red-600 transition-all duration-300 hover:text-black hover:scale-110 hover:bg-red-600 h-9 rounded-full flex items-center absolute top-5 right-5"
        />
      </DialogPanel>
    </Dialog>
  );
}

export default Comments;
