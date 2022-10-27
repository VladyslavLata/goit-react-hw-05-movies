"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryMovies = void 0;
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
const Rating_1 = require("components/Rating/Rating");
const SC = __importStar(require("./GalleryMovies.styled"));
const GalleryMovies = ({ movies }) => {
    const location = (0, react_router_dom_1.useLocation)();
    return (<SC.Gallery>
      {movies.map(({ id, poster_path, vote_average, title }) => (<SC.CardMovie key={id}>
          <SC.LinkTo to={`/movies/${id}`} state={{ from: location }}>
            <SC.ImgWrap>
              <SC.Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            </SC.ImgWrap>
            <SC.FooterMovie>
              <SC.Title>{title}</SC.Title>
              <Rating_1.Rating rating={vote_average}/>
            </SC.FooterMovie>
          </SC.LinkTo>
        </SC.CardMovie>))}
    </SC.Gallery>);
};
exports.GalleryMovies = GalleryMovies;
//# sourceMappingURL=GalleryMovies.jsx.map