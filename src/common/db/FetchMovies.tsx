import { useEffect, useState } from "react";
import { API } from "../../core/config";

export default function FetchMovies(param: string | null) {
  const [moviesData, setMoviesData] = useState([]);
  console.log(`${API}/movies/all${param != null ? `/${param}` : ``}`);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const response = await fetch(
        `${API}/movies/all${param != null ? `/${param}` : ``}`
      );
      const data = await response.json();
      setMoviesData(data);
    };

    fetchMoviesData();
  }, [param]);

  return moviesData;
}
