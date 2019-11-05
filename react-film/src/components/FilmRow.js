import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

const FilmRow = props => {
  const year = new Date(props.film.release_date).getFullYear();

  const handleDetailsClick = (film) => {
    console.log(film);
  }

  const handleCallBackFaveClick = (action) => {
    console.log('FilmRow handleFaveClick');
    props.callBackFilmListing(props.film);
  }
  return (

    <div className="film-row" onClick={ () => handleDetailsClick(props.film) }>
      <FilmPoster posterPath={props.film.poster_path} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{year}</p>
      </div>
      <Fave callBackFilmRow={ handleCallBackFaveClick } />
    </div>
  );
};

export default FilmRow;
