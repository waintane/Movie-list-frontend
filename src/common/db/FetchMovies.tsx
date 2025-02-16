import { useEffect, useState } from "react";
import { API } from "../../core/config";

export default function FetchMovies(param: string | null) {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await fetch(
          `${API}/movies/all${param != null ? `/${param}` : ``}`
        );
        const data = await response.json();
        setMoviesData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMoviesData();
  }, [param]);

  return moviesData;
}
