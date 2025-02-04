import PageLayout from "../common/PageLayout";
import fetchMovies from "../common/db/FetchMovies";
import CardContainer from "../common/components/CardContainer";
import { useSearchParams } from "react-router-dom";

export default function Accueil() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("filter");
  const moviesData = fetchMovies(query);
  console.log(moviesData);

  return (
    <div>
      <PageLayout>
        <h1>Accueil</h1>
        {moviesData.length !== 0 ? (
          <CardContainer movies={moviesData}></CardContainer>
        ) : (
          "Aucun resultat"
        )}
      </PageLayout>
    </div>
  );
}
