import PageLayout from "../common/layouts/PageLayout";
import fetchMovies from "../common/db/FetchMovies";
import CardContainer from "../common/components/CardContainer";
import { useSearchParams } from "react-router-dom";

export default function Accueil() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("filter");
  const moviesData = fetchMovies(query);

  return (
    <div>
      <PageLayout>
        {moviesData.length !== 0 ? (
          <CardContainer movies={moviesData}></CardContainer>
        ) : (
          "Aucun resultat"
        )}
      </PageLayout>
    </div>
  );
}
