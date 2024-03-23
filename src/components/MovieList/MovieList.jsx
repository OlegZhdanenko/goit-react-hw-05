import {  useLocation } from "react-router-dom"
import MovieElement from "../MovieElement/MovieElement"

export default function MovieList({ movies }) {
    const location = useLocation()
    console.log(location);
    return (
        
           
        <ul>
            {movies.map((movie) => {
              
                return <MovieElement key={movie.id} movie={movie} state={location} />   
            })
           }
            </ul>
    )
}