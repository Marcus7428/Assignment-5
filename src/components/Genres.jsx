import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Genres.css";

function Genres() {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(28);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
            params: { api_key: import.meta.env.VITE_TMDB_KEY },
        }).then((response) => {
            setGenres(response.data.genres.filter((genre) =>
                [28, 12, 16, 80, 10751, 14, 36, 27, 9648, 878, 10752, 37].includes(genre.id)
            ));
        }).catch((error) => console.error("Error fetching genres:", error));
    }, []);

    const fetchMovies = (genreId) => {
        setSelectedGenre(genreId);
        axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: { api_key: import.meta.env.VITE_TMDB_KEY, with_genres: genreId },
        }).then((response) => setMovies(response.data.results))
          .catch((error) => console.error("Error fetching movies:", error));
    };

    return (
        <div className="genres-container">
            {genres.length ? (
                <ul className="genres-list">
                    {genres.map((genre) => (
                        <li key={genre.id}>
                            <button
                                className={`genre-button ${selectedGenre === genre.id ? "selected" : ""}`}
                                onClick={() => fetchMovies(genre.id)}
                            >
                                {genre.name}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : <p>No genres available. Please try again later.</p>}

            <div className="movies-container">
                {movies.length ? (
                    <div className="movies-grid">
                        {movies.map((movie) => (
                            <Link to={`/movies/details/${movie.id}`} key={movie.id} className="movie-card-link">
                                <div className="movie-card">
                                    <img
                                        src={movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                            : "https://via.placeholder.com/200x300?text=No+Image"}
                                        alt={movie.title}
                                        className="movie-poster"
                                    />
                                    <h3 className="movie-title">{movie.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : <p>Select a genre to view movies.</p>}
            </div>
        </div>
    );
}

export default Genres;