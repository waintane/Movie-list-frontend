import { useEffect, useState } from "react";
import { API } from "../../core/config";

export default function FetchMovie(id: string | null) {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await fetch(`${API}/movies/${id}`);
      const data = await response.json();
      setMovieData(data);
    };

    fetchMovieData();
  }, [id]);

  return movieData;
}
