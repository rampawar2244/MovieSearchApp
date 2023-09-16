import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
const MovieCards = lazy(() => import('./MovieCard'))

function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of movies to display per page

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
        setSearchResults(data.Search || []);
        setCurrentPage(1); // Reset to the first page when new search results arrive
      } else {
        console.error("Error searching for movies:", response.statusText);
        setSearchResults([]);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle errors here if needed
      setSearchResults([]);
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

  const debounceSearch = debounce(handleSearch, 300);

  useEffect(() => {
    debounceSearch();
  }, [searchQuery]);

  const totalItems = searchResults.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the range of movies to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = searchResults.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="text-center">
      <h1>Search Movies</h1>
      <input
        type="search"
        className="w-75"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-light" onClick={handleSearch}>
        Search
      </button>
      <div className="row d-flex m-0">
        {totalItems === 0 ? (
          <div>No movies found.</div>
        ) : (
          currentMovies.map((movie) => {
            return (
              <Suspense fallback={<div>Loading...</div>} key={movie._id}>
                <div className="col">
                  <MovieCards
                    movie={movie}
                    toggleFavorite={() => toggleFavorite(movie)}
                  />
                </div>
              </Suspense>
            );
          })
        )}
      </div>
      {totalItems > itemsPerPage && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

// Pagination component to display page numbers and navigation
function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ul className="pagination justify-content-center">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
      </li>
      {pages.map((page) => (
        <li
          className={`page-item ${currentPage === page ? "active" : ""}`}
          key={page}
        >
          <button className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </button>
        </li>
      ))}
      <li
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Movies;


