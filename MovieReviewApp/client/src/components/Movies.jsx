import Card from "./Card";
import useFetchMovies from "../services/fetchMovies";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import NoMoviesFound from "./NoMoviesFound";
function Movies({ userInput }) {
  // step 4: ngayon nandito na nyung value na galing sa step 3
  const { movies, fetchMovies, loading } = useFetchMovies(userInput); // and ipapasa sya dito para dun sa pag fetch ng movies, iffetch kung ano yung arguments ng input natin

  useEffect(() => {
    fetchMovies();
    console.log(movies);
  }, [userInput]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : movies?.length > 0 ? (
        movies.map((value, index) => (
          <Card
            key={index}
            movieImage={value.Poster}
            movieTitle={value.Title}
            year={value.Year}
            type={value.Type}
          />
        ))
      ) : (
        <NoMoviesFound />
      )}
    </>
  );
}

export default Movies;
