import { useLocation } from 'react-router-dom';

import { Rating } from 'components/Rating/Rating';
import * as SC from './GalleryMovies.styled';

export const GalleryMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <SC.Gallery>
      {movies.map(({ id, poster_path, vote_average, title }) => (
        <SC.CardMovie key={id}>
          <SC.LinkTo to={`/movies/${id}`} state={{ from: location }}>
            <SC.ImgWrap>
              <SC.Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
            </SC.ImgWrap>
            <SC.FooterMovie>
              <SC.Title>{title}</SC.Title>
              <Rating rating={vote_average} />
            </SC.FooterMovie>
          </SC.LinkTo>
        </SC.CardMovie>
      ))}
    </SC.Gallery>
  );
};
