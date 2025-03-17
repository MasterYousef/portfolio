interface User {
  _id: string;
  username: string;
  email: string;
  image: string;
}
interface UserResponse {
  status: string;
  data: {
    User: User;
    token: string;
  };
}
interface UpdateUser {
  status: string;
  data: User;
}
export type { User, UserResponse, UpdateUser };
