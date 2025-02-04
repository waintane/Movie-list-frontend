import MovieDataProps from "../types/MoviesProps";
import MovieCard from "./MovieCard";

type CardContainerProps = {
  movies: MovieDataProps[];
};

export default function CardContainer({ movies }: CardContainerProps) {
  return (
    <div className="card-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie}></MovieCard>
      ))}
    </div>
  );
}
