import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"; //변화하는 값을 가져올 수 있게 됨
 
function Detail(){
    const {id} = useParams();
    console.log(id); // id를 반환하게 됨

    const [movie, setMovie] = useState({});
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json);
        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            <h1>Detail</h1>
            <img src={movie.large_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.date_uploaded}</p>
        </div>

        );

}


export default Detail;