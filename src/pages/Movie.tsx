import { useSearchParams } from "react-router-dom";
import PageLayout from "../common/layouts/PageLayout";
import FetchMovie from "../common/db/FetchMovie";
import MovieDisplay from "../common/components/movie/MovieDisplay";
import CommentsContainer from "../common/components/comment/CommentsContainer";
import MovieProps from "../common/types/MovieProps";

export default function Movie() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");
  const movieData: MovieProps | undefined = FetchMovie(query);

  function showContent(movieData: MovieProps | undefined) {
    if (movieData?.title && movieData !== undefined) {
      return (
        <div>
          <MovieDisplay {...movieData}></MovieDisplay>
          <CommentsContainer comments={movieData.comments}></CommentsContainer>
        </div>
      );
    }
    return "En chargement...";
  }

  return (
    <div>
      <PageLayout>{showContent(movieData)}</PageLayout>
    </div>
  );
}
