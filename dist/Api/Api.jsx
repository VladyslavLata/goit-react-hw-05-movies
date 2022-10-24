"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = exports.getReviews = exports.getCast = exports.getMovieDetails = exports.getTrendingMovies = void 0;
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c3bf1190c2b2adf3cc1d3c6cece5bec3';
const params = {
    params: {
        api_key: API_KEY,
    },
};
const getTrendingMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get('/trending/movie/day', params);
    return response.data;
});
exports.getTrendingMovies = getTrendingMovies;
const getMovieDetails = (movieId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`/movie/${movieId}`, params);
    return response.data;
});
exports.getMovieDetails = getMovieDetails;
const getCast = (movieId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`/movie/${movieId}/credits`, params);
    return response.data;
});
exports.getCast = getCast;
const getReviews = (movieId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`/movie/${movieId}/reviews`, params);
    return response.data;
});
exports.getReviews = getReviews;
const getMovies = (movie) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        params: {
            api_key: API_KEY,
            query: movie,
        },
    };
    const response = yield axios_1.default.get(`/search/movie`, params);
    return response.data;
});
exports.getMovies = getMovies;
//# sourceMappingURL=Api.jsx.map