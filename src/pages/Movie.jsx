import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Movie = () => {
    const {title} = useParams();
    const navigate = useNavigate();

    return <div>
        Some movie {title}
        <button className='btn' onClick={() => navigate(-1)}>Go back</button>
    </div>
}

export default Movie;