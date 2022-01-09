import PropTypes from "prop-types";
import {Link} from "react-router-dom"; //a태그같은 역할을 한당.

function Movie({id,medium_cover_image,summary,title,genres}){
    return <div>
    <Link to={`movie/${id}`}><h2>{title}</h2></Link>
    <img src={medium_cover_image} alt={title} />
    <p>{summary.length > 235 ? `${summary.slice(0, 235)}` : summary}</p>
    {genres? <ul>
        {genres.map((g) => (
            <li key={g}>
                {g}
            </li>
        ))}
    </ul>: null}
</div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

// react Router 사용법 : npm install react-router-dom 입력해서 인스톨. 
// 스크린(=Route) 단위로 생각하기! 


export default Movie;