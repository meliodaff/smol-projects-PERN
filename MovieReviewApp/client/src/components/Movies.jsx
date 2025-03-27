import Card from "./Card";
import useFetchMovies from "../services/fetchMovies";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import NoMoviesFound from "./NoMoviesFound";
import useFetchMovie from "../services/fetchMovie";
import CertainCard from "./CertainCard";
function Movies({ userInput, certainMovie }) {
  // step 4: ngayon nandito na nyung value na galing sa step 3
  const { movies, fetchMovies, loading } = useFetchMovies(userInput); // and ipapasa sya dito para dun sa pag fetch ng movies, iffetch kung ano yung arguments ng input natin

  const { movie, fetchMovie, loading: loading1 } = useFetchMovie(certainMovie);

  useEffect(() => {
    fetchMovies();
    // console.log(movies);
  }, [userInput]);
  useEffect(() => {
    fetchMovie();
    console.log(movie);
  }, [certainMovie]);
  return (
    <>
      {loading1 ? (
        <Loading />
      ) : movie && movie.Title ? (
        <CertainCard
          key={1}
          movieImage={movie.Poster}
          movieTitle={movie.Title}
          description={movie.Plot}
          director={movie.Director}
          ratings={movie.imdbRating}
          runtime={movie.Runtime}
          genre={movie.Genre}
        />
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
