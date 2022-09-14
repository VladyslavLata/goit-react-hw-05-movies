import PropTypes from 'prop-types';
import * as SC from './SearchPanel.styled';

export const SearchPanel = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.currentTarget.elements.movie.value);
    e.currentTarget.reset();
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Label htmlFor="movie">
        <SC.Input
          type="text"
          name="movie"
          id="movie"
          placeholder="Search movies"
        />
      </SC.Label>
      <SC.SearchButton type="submit">Search</SC.SearchButton>
    </SC.Form>
  );
};

SearchPanel.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
