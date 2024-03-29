import { Suspense, useEffect, useRef, useState } from "react";
import {  Link, NavLink, Outlet,  useLocation,  useParams } from "react-router-dom";
import { getMoviebyId } from "../../MoviApi";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";
import { clsx } from 'clsx';


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [film, setFilm] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const location = useLocation();
    const goBackLink = useRef(location.state ?? "/movies");
    

    useEffect(() => {
        async function getFilmById() {
            try {
                setError(false)
                setLoading(true)
                const response = await getMoviebyId(movieId)
                setFilm(response)
                setLoading(false)
            } catch (error) {
                setError(true)  
            } finally {
                setLoading(false)
            }
        }
        getFilmById()
    }, [movieId])


    const makeLinkColor=({ isActive })=> clsx(css.item,isActive && css.isActive)

    return (
        <div>
            {loading && <Loader />}
            {error && <ErrorMessage />}

            {film && <div >
                <Link className={css.link} to={goBackLink.current} >Go back</Link>
                <div className={css.page}>
                <img className={css.poster} src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt={film.original_title} />
                <div>
                <h1>{film.original_title}</h1>
                <p> <b>Budget :</b> {film.budget }$</p>
                <p> <b>Overview :</b> {film.overview}</p>
                <p> <b>Genre :</b> {film.genres.map((genre) => genre.name).join(", ")}</p>
                </div>
                </div>
                <ul className={css.link}>
                    <li><NavLink className={makeLinkColor} to="cast">Cast</NavLink></li>
                    <li><NavLink className={makeLinkColor} to="reviews">Reviews</NavLink></li>
                </ul>
                <Suspense fallback={<Loader />}><Outlet/></Suspense>
                
            </div>}
        </div>
    )
}