import { Link } from 'react-router-dom';

export const GalleryMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, poster_path, vote_average, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
            </div>
            <h2>{title}</h2>
            <p>{vote_average}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
