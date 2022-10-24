"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const Loader_1 = require("components/Loader/Loader");
const Api_1 = require("Api/Api");
const GalleryMovies_1 = require("components/GalleryMovies/GalleryMovies");
const Message_1 = require("components/Message/Message");
const useGetArreyDataPage_1 = require("Hooks/useGetArreyDataPage");
const Home = () => {
    const [movies, status, error] = (0, useGetArreyDataPage_1.useGetArreyDataPage)(Api_1.getTrendingMovies, 'results');
    if (status === 'pending') {
        return <Loader_1.Loader />;
    }
    else if (status === 'resolved' && movies.length > 0) {
        return <GalleryMovies_1.GalleryMovies movies={movies}/>;
    }
    else if (status === 'rejected') {
        return <Message_1.Message message={error.message}/>;
    }
};
exports.Home = Home;
//# sourceMappingURL=Home.js.map