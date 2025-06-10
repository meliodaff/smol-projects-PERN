import axios from "axios";
import { useState } from "react";

function useFetchMovie(certainMovie) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchMovie() {
    setLoading(true);
    try {
      const result = await axios.post(
        `https://smol-projects-pern.onrender.com/movie`,
        {
          certainMovie,
        }
      );
      setMovie(result.data.message);
    } catch (err) {
      console.log(err.stack);
    }
    setLoading(false);
  }
  return { movie, loading, fetchMovie };
}

export default useFetchMovie;
