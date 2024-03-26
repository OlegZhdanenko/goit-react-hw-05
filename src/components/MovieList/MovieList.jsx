import { useLocation } from "react-router-dom";
import MovieElement from "../MovieElement/MovieElement";
import css from "../MovieList/MovieList.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


export default function MovieList({ movies }) {
    const location = useLocation()
    return (
        <ul className={css.list}>
            {movies.map((movie) => {
                
                return movies.length > 0 ? <MovieElement key={movie.id} movie={movie} state={location} /> : <ErrorMessage />
            })
            }
        </ul>
    );
}