import { User } from "./user";

interface Comment {
  _id: string;
  comment: string;
  user: User;
  project: string;
}
interface CommentsRes {
  status: string;
  data: Comment[];
}
interface CommentRes {
  status: string;
  data: Comment;
}

export type { Comment, CommentsRes, CommentRes };
