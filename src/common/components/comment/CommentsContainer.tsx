import { JSX } from "react/jsx-runtime";
import CommentProps from "../../types/CommentProps";
import Comment from "./Comment";

type CommentsContainerProps = {
  comments: CommentProps[];
};

export default function CommentsContainer({
  comments,
}: CommentsContainerProps) {
  return <div></div>;
}
