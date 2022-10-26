import React from "react";
import * as SC from './SearchPanel.styled';

interface IProps {
  onSubmit: (movie: string) => void;
}

interface FormElements extends HTMLFormControlsCollection {
    movie: HTMLInputElement
}

interface InputMovieElement extends HTMLFormElement {
   readonly elements: FormElements
}

export const SearchPanel: React.FC<IProps> = ({onSubmit}) => {
  const handleSubmit = (e: React.FormEvent<InputMovieElement> ) => {
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
