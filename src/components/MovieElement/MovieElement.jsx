import {  NavLink } from "react-router-dom";
import css from "../MovieElement/MovieElement.module.css"
export default function MovieElement({ movie, state }) {
    return (
        <li className={css.card}>
            <NavLink to={`/${movie.id}`}  state={state} >
                <div>
                    <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
                className={css.picture}   />
                </div>
                <p className={css.title}>{movie.title }</p>
                </NavLink >
        </li>
    )
}