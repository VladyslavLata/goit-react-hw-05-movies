"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const react_1 = __importDefault(require("react"));
const Loader_1 = require("components/Loader/Loader");
const Api_1 = require("Api/Api");
const GalleryMovies_1 = require("components/GalleryMovies/GalleryMovies");
const Message_1 = require("components/Message/Message");
const useGetArreyDataPage_1 = require("Hooks/useGetArreyDataPage");
const Home = () => {
    const [movies, status, error] = (0, useGetArreyDataPage_1.useGetArreyDataPage)(Api_1.getTrendingMovies);
    return (<>
      {status === 'pending' && <Loader_1.Loader />}
      {status === 'resolved' && movies.length > 0 && (<GalleryMovies_1.GalleryMovies movies={movies}/>)}
      {status === 'rejected' && <Message_1.Message message={error}/>}
    </>);
};
exports.Home = Home;
//# sourceMappingURL=Home.jsx.map