import PropTypes from "prop-types";

function Movie({medium_cover_image,summary,title,genres}){
    return <div>
    <h2>{title}</h2>
    <img src={medium_cover_image} alt={title} />
    <p>{summary}</p>
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
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

// react Router 사용법 : npm install react-router-dom 입력해서 인스톨. 
// 스크린(=Route) 단위로 생각하기! 


export default Movie;