import React from "react";

const MovieCards = (props) => {

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <div className="movie">
            <img src={movie.Poster} alt="movie" />
            <div className="overlay">
                <div>{movie.Title}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCards;
