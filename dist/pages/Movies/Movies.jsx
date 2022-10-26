"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Loader_1 = require("components/Loader/Loader");
const Api_1 = require("Api/Api");
const Message_1 = require("components/Message/Message");
const GalleryMovies_1 = require("components/GalleryMovies/GalleryMovies");
const SearchPanel_1 = require("../../components/SearchPanel/SearchPanel");
const useGetArreyDataPage_1 = require("Hooks/useGetArreyDataPage");
const Movies = () => {
    var _a;
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    const paramMovie = (_a = searchParams.get('movie')) !== null && _a !== void 0 ? _a : '';
    const [movies, status, error] = (0, useGetArreyDataPage_1.useGetArreyDataPage)(Api_1.getMovies, paramMovie);
    const noMoviesMessage = `There are no movies matching your search "${paramMovie}".`;
    const updateQueryString = (movie) => {
        const nextMovie = movie !== '' ? { movie } : {};
        setSearchParams(nextMovie);
    };
    return (<>
      <SearchPanel_1.SearchPanel onSubmit={updateQueryString}/>
      {status === 'pending' && <Loader_1.Loader />}
      {status === 'resolved' && movies.length > 0 && (<GalleryMovies_1.GalleryMovies movies={movies}/>)}
      {status === 'resolved' && movies.length < 1 && (<Message_1.Message message={noMoviesMessage}/>)}
      {status === 'rejected' && <Message_1.Message message={error}/>}
    </>);
};
exports.default = Movies;
//# sourceMappingURL=Movies.jsx.map