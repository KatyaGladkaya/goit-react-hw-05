import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/tmdb";
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies);
    }, []);

    return (
        <div className={s.container}>
            <h1>Trending Movies</h1>
            <MovieList movies={movies} />
        </div>
    );
}

export default HomePage
