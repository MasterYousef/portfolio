"use server";

import { getData } from "@/hooks/getData";
import { CommentsRes } from "@/types/comment";

async function getComments(id: string) {
  const res = await getData<CommentsRes>(`/comment/project/${id}`);
  return res;
}

export default getComments;
