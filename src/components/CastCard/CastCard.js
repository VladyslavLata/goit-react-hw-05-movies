import * as SC from './CastCard.styled';
import PropTypes from 'prop-types';
import img from '../../img/noUserProfile.webp';

export const CastCard = ({ cast }) => {
  return cast.map(({ name, profile_path, credit_id }) => (
    <SC.CastCard key={credit_id}>
      <SC.ImgWrap>
        <SC.Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : img
          }
          alt={name}
        />
      </SC.ImgWrap>
      <SC.ActorName>{name}</SC.ActorName>
    </SC.CastCard>
  ));
};

CastCard.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      profile_path: PropTypes.string,
      credit_id: PropTypes.string.isRequired,
    })
  ),
};
