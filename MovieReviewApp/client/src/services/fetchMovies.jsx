import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

function useFetchMovies() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    try {
      const result = await axios.get(
        `http://www.omdbapi.com/?apikey=12898704&s=batman`
      );
      setMovies(result.data.Search);
    } catch (err) {
      console.log(err.stack);
    }
  }
  return { movies, fetchMovies };
}

export default useFetchMovies;
