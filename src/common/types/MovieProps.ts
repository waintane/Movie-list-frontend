import Bookmark from "./BookmarkProps";

type MoviesDataProps = {
  createdAt: string | null;
  id: number;
  title: string;
  description: string;
  genre: string;
  image: string;
  comments: Comment[];
};

export default MoviesDataProps;
