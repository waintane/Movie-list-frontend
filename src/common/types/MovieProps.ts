import Bookmark from "./BookmarkProps";
import CommentProps from "./CommentProps";

type MovieProps = {
  createdAt: string | null;
  id: number;
  title: string;
  description: string;
  genre: string;
  image: string;
  comments: CommentProps[];
};

export default MovieProps;
