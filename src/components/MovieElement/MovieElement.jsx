import { Link } from "react-router-dom";

export default function MovieElement({ movie, state }) {
    return (
        <li>
            <Link to={`/${movie.id}`} state={state}>
                <div>
                    <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
                    />
                </div>
                <p>{movie.title }</p>
                </Link >
        </li>
    )
}