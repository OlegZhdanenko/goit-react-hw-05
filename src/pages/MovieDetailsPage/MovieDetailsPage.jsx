import { Suspense, useEffect,useRef,useState } from "react"
import {  Link, NavLink, Outlet,  useLocation,  useParams } from "react-router-dom";
import { getMoviebyId } from "../../MoviApi";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [film, setFilm] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const location = useLocation();
    const goBackLink = useRef(location.state ?? "/");
    

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

    return (
        <div>
            {loading && <Loader />}
            {error && <ErrorMessage />}

            {film && <div>
                <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt={film.original_title} />
                <Link to={goBackLink.current} >Go back</Link>
                <h1>{film.original_title}</h1>
                <p> Budget :{film.budget }$</p>
                <p> Overview :{film.overview}</p>
                <p> Genre :{film.genres.map((genre) => genre.name).join(", ")}</p>
                <ul>
                    <li><NavLink to="cast">Cast</NavLink></li>
                    <li><NavLink to="reviews">Reviews</NavLink></li>
                </ul>
                <Suspense fallback={null}><Outlet/></Suspense>
                
            </div>}
        </div>
    )
}