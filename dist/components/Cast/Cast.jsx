"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Api_1 = require("Api/Api");
const CastCard_1 = require("components/CastCard/CastCard");
const Message_1 = require("components/Message/Message");
const Loader_1 = require("components/Loader/Loader");
const useGetArreyDataPage_1 = require("Hooks/useGetArreyDataPage");
const Box_1 = require("components/Box/Box");
const Cast = () => {
    const { movieId } = (0, react_router_dom_1.useParams)();
    const [cast, status, error] = (0, useGetArreyDataPage_1.useGetArreyDataPage)(Api_1.getCast, movieId);
    return (<>
      {status === 'pending' && <Loader_1.Loader />}
      {status === 'resolved' && (<section>
          <Box_1.Box as="ul" display="flex" gridGap={4} flexWrap="wrap" py={4}>
            <CastCard_1.CastCard cast={cast}/>
          </Box_1.Box>
        </section>)}
      {status === 'rejected' && <Message_1.Message message={error}/>}
    </>);
};
exports.default = Cast;
//# sourceMappingURL=Cast.jsx.map