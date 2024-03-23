import { useEffect,useState } from "react"
import { useSearchParams } from "react-router-dom";
import { getSearchFilm } from "../../MoviApi";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";


export default function MoviesPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchFilms, setSearchFilms] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const filmSearch = searchParams.get("movie") ?? "";
    
    
    useEffect(() => {
        async function searchFilm() {
        try {
                setError(false)
                setLoading(true)
                const response = await getSearchFilm(filmSearch)
                setSearchFilms(response)
                setLoading(false)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
        }
        searchFilm()
},[filmSearch])
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setSearchParams({ movie: form.elements.movie.value });
        form.reset()
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="movie"/>
            <button type="submit">Search</button>
        </form>
        <div>
            {loading && <Loader />}
            {error && <ErrorMessage/>}
            {searchFilms && <MovieList movies={searchFilms} />}
        </div>
        </div>
    )
}