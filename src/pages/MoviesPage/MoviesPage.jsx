import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import s from './MoviesPage.module.css';

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams();
    const query = params.get(`query` || '');

    useEffect(() => {
        if (query) {
            searchMovies(query).then(setMovies);
        }
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        const value = e.target.elements.query.value;
        setParams({ query: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='query' defaultValue={query} className={s.input} />
                <button type = "submit" className={s.btn}>Search</button>
            </form>
            <MovieList movies={movies} />
    </div>

    );  
}

export default MoviesPage;