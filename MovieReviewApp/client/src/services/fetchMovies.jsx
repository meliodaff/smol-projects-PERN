import { useEffect, useState } from "react";
import axios from "axios";

function useFetchMovies(userInput) {
  // step 5: then andito na yung input state natin
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchMovies() {
    setLoading(true);
    try {
      console.log(userInput);
      const result = await axios.post(
        `http://localhost:3000/movies`,
        { userInput } // and ipapasa sya dito para filter yung mga movies na hinahanap natin
      );
      setMovies(result.data.message.Search);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }
  return { movies, fetchMovies, loading };
}

export default useFetchMovies;
