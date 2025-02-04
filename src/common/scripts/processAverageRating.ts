import BookmarkProps from "../types/BookmarkProps";
import CommentProps from "../types/CommentProps";

export default function processAverageRating(comments: CommentProps[]) {
  let totalRating = 0;

  for (const comment of comments) {
    totalRating += comment.rating;
  }

  const roundedRating = Math.round(totalRating / comments.length);

  return Number.isNaN(roundedRating) ? "Pas de note" : roundedRating;
}
