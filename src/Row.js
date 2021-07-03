import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'

function Row({ fetchURL, title, isLargeRow = false }) {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        async function fetchMovies() {
            const res = await axios.get(fetchURL)
            setMovies(res.data.results)
            return res
        }
        fetchMovies()
    }, [fetchURL])
    console.log(movies)
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    )
}

export default Row
