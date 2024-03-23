import { useEffect,useState } from "react"
import { getMovie } from "../../MoviApi"
import MovieList from "../../components/MovieList/MovieList"
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";



export default function HomePage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                setError(false)
                setLoading(true)
                const data = await getMovie()
                setMovie(data)
                setLoading(false)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, []);
    return (
        <div>
            <h1>Tranding today</h1>
            {loading && <Loader />}
            {error && <ErrorMessage/>}
            <MovieList movies={movie} />
        </div>
    )
}