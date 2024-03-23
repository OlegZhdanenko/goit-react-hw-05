import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import { getMovieReview} from "../../MoviApi";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function getFilmReviews() {
            try {
                setError(false)
                setLoading(true)
                const response = await getMovieReview(movieId)
                setReviews(response)
                setLoading(false)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getFilmReviews()
    }, [movieId])
    console.log(reviews);
        return (
        <div>
                {loading && <Loader />}
                {error && <ErrorMessage />}
                {reviews.length > 0 && <ul>
                    {reviews.map((review) => {
                        return <li key={review.id}>

                            <h2>Author: {review.author}</h2>
                            <p>Review: {review.content}</p>
                        </li>
                    })}
                </ul>}
                {!reviews.length && <p>We dont have any reviews for this movie</p>}
        </div>
    )
}