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
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("react");
const SharedLayout_1 = require("components/SharedLayout/SharedLayout");
const Home_1 = require("pages/Home/Home");
const MovieDetails = (0, react_2.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/MovieDetails/MovieDetails'))));
const Movies = (0, react_2.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/Movies/Movies'))));
const Cast = (0, react_2.lazy)(() => Promise.resolve().then(() => __importStar(require('components/Cast/Cast'))));
const Reviews = (0, react_2.lazy)(() => Promise.resolve().then(() => __importStar(require('components/Reviews/Reviews'))));
const App = () => {
    return (<react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<SharedLayout_1.SharedLayout />}>
        <react_router_dom_1.Route index element={<Home_1.Home />}/>
        <react_router_dom_1.Route path="movies" element={<Movies />}/>
        <react_router_dom_1.Route path="movies/:movieId" element={<MovieDetails />}>
          <react_router_dom_1.Route path="cast" element={<Cast />}/>
          <react_router_dom_1.Route path="reviews" element={<Reviews />}/>
        </react_router_dom_1.Route>
      </react_router_dom_1.Route>
    </react_router_dom_1.Routes>);
};
exports.App = App;
//# sourceMappingURL=App.jsx.map