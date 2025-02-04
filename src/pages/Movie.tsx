import { useSearchParams } from "react-router-dom";
import PageLayout from "../common/PageLayout";
import FetchMovie from "../common/db/FetchMovie";
import processAverageRating from "../common/scripts/processAverageRating";

export default function Movie() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");
  const movieData: any = FetchMovie(query);

  return (
    <div>
      <PageLayout>
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
                {movieData ? processAverageRating(movieData.comments) : ""}
              </section>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
