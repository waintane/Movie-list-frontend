import processAverageRating from "../../scripts/processAverageRating";
import MovieProps from "../../types/MovieProps";

export default function MovieDisplay(movieData: MovieProps) {
  return (
    <div>
      <h1> {movieData ? movieData.title : "Loading..."} </h1>
      <div className="movie-container">
        <div className="display-movie">
          {}
          <img
            className="img-movie"
            src={movieData ? movieData.image : "Loading"}
            alt=""
          />
          <div>
            <section>
              <h4>Genre</h4>
              <p> {movieData ? movieData.genre : ""}</p>
            </section>
            <section>
              <h4>Description</h4>
              <p> {movieData ? movieData.description : ""}</p>
            </section>
            <section>
              Note moyenne :{" "}
              {movieData.comments
                ? processAverageRating(movieData.comments)
                : ""}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
