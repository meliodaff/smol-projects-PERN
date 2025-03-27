import axios from "axios";
import { useState } from "react";

function useFetchMovie(certainMovie) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchMovie() {
    setLoading(true);
    try {
      const result = await axios.get(
        `http://www.omdbapi.com/?apikey=12898704&t=${certainMovie}`
      );
      setMovie(result.data);
    } catch (err) {
      console.log(err.stack);
    }
    setLoading(false);
  }
  return { movie, loading, fetchMovie };
}

export default useFetchMovie;
