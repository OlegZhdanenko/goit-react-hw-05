import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import { getMovieCast} from "../../MoviApi";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "../MovieCast/MovieCast.module.css"

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function getFilmById() {
            try {
                setError(false)
                setLoading(true)
                const response = await getMovieCast(movieId)
                setCast(response)
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
           {cast&& <ul className={css.list}>
                {cast.map((actor) => {
                    return <li key={actor.id} className={css.item}>

                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} className={css.poster}/>
                       <p className={css.name}>{ actor.name}</p> 
                    </li>
                })}
            </ul>}
        </div>
    )
}