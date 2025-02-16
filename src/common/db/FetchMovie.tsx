import { useEffect, useState } from "react";
import { API } from "../../core/config";

export default function FetchMovie(id: string | null) {
  const [movieData, setMovieData] = useState<any>();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`${API}/movies/${id}`);
        const data = await response.json();
        setMovieData(data);
      } catch (err) {
        setMovieData(undefined);
      }
    };
    fetchMovieData();
  }, [id]);

  return movieData;
}
