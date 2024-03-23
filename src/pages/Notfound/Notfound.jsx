import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops...Not found!</h1>
            <Link to={"/"}>Back to Home</Link>
            </div>
    )
}