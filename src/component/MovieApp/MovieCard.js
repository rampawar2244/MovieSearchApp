import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
    <>
      <div className="card" style={{ width: "14rem", height: "100%" }}>
        <img
          className="card-img-top"
          src={movie.Poster}
          width={100}
          height={200}
          alt="Poster"
          
        />
        <div className="card-body">
          <h6 className="card-title CardTitle">Title: {movie.Title}</h6>
          <p className="card-text">Movie Year: {movie.Year}</p>
          <p className="card-text">Movie Type {movie.Type}</p>

          <FavoriteBorderIcon
            onClick={handleFavoriteClick}
            style={heartIconStyle}
          />
        </div>
      </div>
    </>
  );
}

export default MovieCard;
