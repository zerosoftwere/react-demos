
const Movies = ({movies}) => {
  return (
    <ul className="movie-list">
      { 
        movies?.map(movie => 
          <li key={movie?.episode_id} className="movie-item">
            <h2 className="title">{ movie?.title }</h2>
            <p className="text">{ movie.opening_crawl }</p>
          </li>
        )
      }
    </ul>
  );
};

export default Movies;