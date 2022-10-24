"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const Loader_1 = require("components/Loader/Loader");
const Api_1 = require("Api/Api");
const MovieDetailsBox_1 = require("components/MovieDetailsBox/MovieDetailsBox");
const Message_1 = require("components/Message/Message");
const AdditionMoviInformation_1 = require("components/AdditionMoviInformation/AdditionMoviInformation");
const ButtonBack_1 = require("components/ButtonBack/ButtonBack");
const useGetObjDataPage_1 = require("Hooks/useGetObjDataPage");
const Box_1 = require("components/Box/Box");
const MovieDetails = () => {
    var _a, _b;
    const { movieId } = (0, react_router_dom_1.useParams)();
    const location = (0, react_router_dom_1.useLocation)();
    const [movieDetails, status, error] = (0, useGetObjDataPage_1.useGetObjDataPage)(Api_1.getMovieDetails, movieId);
    const backLink = (0, react_1.useRef)((_b = (_a = location.state) === null || _a === void 0 ? void 0 : _a.from) !== null && _b !== void 0 ? _b : '/');
    return (<>
      {status === 'pending' && <Loader_1.Loader />}
      {status === 'resolved' && (<Box_1.Box as="section" py={4}>
          <ButtonBack_1.ButtonBack to={backLink.current}/>
          <MovieDetailsBox_1.MovieDetailsBox movie={movieDetails}/>
          <AdditionMoviInformation_1.AdditionMoviInformation />
          <react_1.Suspense fallback={<Loader_1.Loader />}>
            <react_router_dom_1.Outlet />
          </react_1.Suspense>
        </Box_1.Box>)}
      {status === 'rejected' && <Message_1.Message message={error.message}/>}
    </>);
};
exports.default = MovieDetails;
//# sourceMappingURL=MovieDetails.js.map