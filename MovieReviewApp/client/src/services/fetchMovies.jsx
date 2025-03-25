import { useEffect, useState } from "react";
import axios from "axios";

function useFetchMovies(userInput) {
  // step 5: then andito na yung input state natin
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchMovies() {
    setLoading(true);
    try {
      const result = await axios.get(
        `http://www.omdbapi.com/?apikey=12898704&s=${userInput}` // and ipapasa sya dito para filter yung mga movies na hinahanap natin
      );
      setMovies(result.data.Search);
    } catch (err) {
      console.log(err.stack);
    }
    setLoading(false);
  }
  return { movies, fetchMovies, loading };
}

export default useFetchMovies;
