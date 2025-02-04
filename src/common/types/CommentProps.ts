import User from "./User";

type CommentProps = {
  id: number;
  comment: string;
  rating: number;
  user: User;
};

export default CommentProps;
