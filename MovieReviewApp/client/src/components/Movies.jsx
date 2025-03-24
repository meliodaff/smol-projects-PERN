import Card from "./Card";
import useFetchMovies from "../services/fetchMovies";
import { useEffect, useState } from "react";
function Movies() {
  const { movies, fetchMovies } = useFetchMovies();

  useEffect(() => {
    fetchMovies();
    console.log(movies);
  }, []);
  return (
    <>
      {console.log(movies)}
      {movies.map((value, index) => (
        <Card
          key={index}
          movieImage={value.Poster}
          movieTitle={value.Title}
          year={value.Year}
          type={value.Type}
        />
      ))}
    </>
  );
}

export default Movies;
