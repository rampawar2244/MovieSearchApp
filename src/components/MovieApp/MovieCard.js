import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./MoviesCard.css"; // Import a CSS file for additional styling

function MovieCard({ movie, isFavorite, toggleFavorite }) {
  const [filled, setFilled] = useState(isFavorite);

  const handleFavoriteClick = () => {
    toggleFavorite();
    setFilled(!filled);
  };

  const heartIconStyle = {
    color: filled ? "red" : "inherit",
    cursor: "pointer",
    border: filled ? "2px solid red" : "2px solid transparent",
    borderRadius: "50%",
    padding: "2px",
  };

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={movie.Poster}
        alt="Poster"
      />
      <div className="movie-details">
        <h6 className="movie-title">Title: {movie.Title}</h6>
        <p className="movie-year">Movie Year: {movie.Year}</p>
        <p className="movie-type">Movie Type: {movie.Type}</p>
      </div>
      <FavoriteBorderIcon
        onClick={handleFavoriteClick}
        style={heartIconStyle}
      />
    </div>
  );
}

export default MovieCard;
