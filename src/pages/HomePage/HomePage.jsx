import { useEffect,useState } from "react"
import { getMovie } from "../../MoviApi"
import MovieList from "../../components/MovieList/MovieList"
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import TrandingBtn from "../../components/TrandingBtn/TrandingBtn";



export default function HomePage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movie, setMovie] = useState([]);
    const [tranding, setTranding] = useState("day")

   
    const trandingChoise=(newTranding)=> {
    setTranding(newTranding);
    }



    useEffect(() => {
        async function getData() {
            try {
                setError(false)
                setLoading(true)
                const data = await getMovie(tranding)
                setMovie(data)
                setLoading(false)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [tranding]);



    return (
        <div>
            <TrandingBtn  onTranding={trandingChoise}/>
            <h1>Tranding today</h1>
            {loading && <Loader />}
            {error && <ErrorMessage/>}
            <MovieList movies={movie} />
        </div>
    )
}