import { Link } from "react-router-dom";
import MovieDataProps from "../../types/MoviesProps";

export default function MovieCard(movie: MovieDataProps) {
  return (
    <Link key={movie.id} to={"movie?id=" + movie.id} className="main-card">
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${movie.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h3> {movie.title} </h3>
        </div>
      </div>
    </Link>
  );
}
