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
exports.MovieDetailsBox = void 0;
const react_1 = __importDefault(require("react"));
const Box_1 = require("components/Box/Box");
const Rating_1 = require("components/Rating/Rating");
const SC = __importStar(require("./MovieDetailsBox.styled"));
const MovieDetailsBox = ({ movie: { title, overview, genres, poster_path, vote_average, release_date }, }) => {
    return (<Box_1.Box as="div" display="flex">
      <SC.ImgWrap>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
      </SC.ImgWrap>
      <Box_1.Box as="div" ml={5}>
        <Box_1.Box as="h3" display="inline-block" mr={6}>
          {title}
        </Box_1.Box>
        <Rating_1.Rating rating={vote_average}/>
        <SC.Table>
          <tbody>
            <tr>
              <SC.TableCell>Release date:</SC.TableCell>
              <SC.TableCell> {release_date}</SC.TableCell>
            </tr>
            <tr>
              <SC.TableCell>Overview:</SC.TableCell>
              <SC.TableCell>{overview}</SC.TableCell>
            </tr>
            <tr>
              <SC.TableCell>Genres:</SC.TableCell>
              <SC.TableCell>
                {genres.map(({ name }) => name).join(', ')}
              </SC.TableCell>
            </tr>
          </tbody>
        </SC.Table>
      </Box_1.Box>
    </Box_1.Box>);
};
exports.MovieDetailsBox = MovieDetailsBox;
//# sourceMappingURL=MovieDetailsBox.jsx.map