import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import "./Movies.css"; // Import your CSS file for additional styling
const MovieCards = lazy(() => import('./MovieCard.js'))

function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);
  const [moviesFound, setMoviesFound] = useState(true);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/search?query=${searchQuery}`
      );

      if (response.status === 200) {
        const data = response.data;
        console.log(response.data.Search, "xyz");
        console.log(data.Search, "abcs");
        const searchResults = data.Search || [];

        // Check if any movies were found
        setMoviesFound(searchResults.length > 0);

        setSearchResults(searchResults);
        setCurrentPage(1); // Reset to the first page when new search results arrive
      } else {
        console.error("Error searching for movies:", response.statusText);
        setSearchResults([]);
        setMoviesFound(false);  
      }
    } catch (error) {
      console.error("An error occurred:", error);
       
      setSearchResults([]);
      setMoviesFound(false);  
    }
  };

  const toggleFavorite = (movieData) => {
    axios
      .post("http://localhost:8000/api/movies/favorites/add", {
        movie: movieData,
      })
      .then((res) => {
        console.log(res, "xyz");
        const updateFavorite = res.data;
        setIsFavorite(!isFavorite);
        console.log("Favorite", updateFavorite);
      })
      .catch((err) => {
        console.error("Error add to favorite", err);
      });
  };

  const debouncedSearch = debounce(handleSearch, 300);

  useEffect(() => {
    debouncedSearch();
  }, [searchQuery]);

 
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = searchResults.slice(indexOfFirstMovie, indexOfLastMovie);
 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(searchResults.length / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    return (
      <div className="movies-container">
        <h1 className="movies-title">Search Movies</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {searchQuery === "" && (
          <div className="message">Please enter a movie title to search.</div>
        )}
        {!moviesFound && searchQuery !== "" && (
          <div className="message">Movie not found.</div>
        )}
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                onClick={() => paginate(number)}
                className={`page-link ${
                  number === currentPage ? "active" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <div className="movie-cards-container">
          {currentMovies.map((movie) => {
            return (
              <Suspense fallback={<div>Loading...</div>} key={movie._id}>
                <div className="">
                  <MovieCards
                    movie={movie}
                    toggleFavorite={() => toggleFavorite(movie)}
                  />
                </div>
              </Suspense>
            );
          })}
        </div>
      </div>
    );
}
  export default Movies;
  
