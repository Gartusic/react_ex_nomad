import Movie from "../components/Movie";
import { useEffect, useState } from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await ( await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
            ) // api를 가지고 오는 방법 2.
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        // fetch( //api를 가지고 오는 방법 1.
        //     'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        //     )
        //         .then((response) => response.json()) // 받아온 response 속에 있는 json을 얻게 될 것이고 
        //         .then((json) => {
        //             setMovies(json.data.movies)
        //             setLoading(false);
        //         }); // json을 가져와서 setMovies를 실행
        getMovies()
    },[])
    console.log(movies)
    return (
        <div>
            {loading 
            ? 
            <h1>Loading...</h1> 
            : 
            <div>
                {movies.map((movie) => 
                <Movie 
                key = {movie.id}
                id = {movie.id}
                medium_cover_image={movie.medium_cover_image}
                summary={movie.summary}
                title={movie.title}
                genres={movie.genres} />
                )}
            </div>}
        </div>
    )
    // hasOwnProperty()함수 - 특정 요소가 존재하는지 아닌지 판단하는 함수...
    // 확인하지 않고 출력할 경우, 요소가 존재하지 않을 시 에러가 나기 때문에 사용해야함...
    // map function이 하는 일 : array의 요소를 변형하여 다시 새로운 array로 만들어줌
    // [1, 2, 3, 4, 5, 6].map(x => x*2)의 결과 [2, 4, 6, 8, 10, 12]

}

export default Home;