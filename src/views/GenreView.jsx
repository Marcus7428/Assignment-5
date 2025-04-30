import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GenreView.css";

function GenreView() {
    const [movies, setMovies] = useState([]);
    const genre_id = 28;

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre_id}&include_adult=false`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        fetchMovies();
    }, [genre_id]);

    return (
        <div className="genre-view-container">
            <h1 className="genre-title">Movies</h1>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <Link to={`/movies/details/${movie.id}`} key={movie.id} className="movie-card-link">
                        <div className="movie-card">
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                        : "https://via.placeholder.com/200x300?text=No+Image"
                                }
                                alt={movie.title}
                                className="movie-poster"
                            />
                            <h3 className="movie-title">{movie.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default GenreView;