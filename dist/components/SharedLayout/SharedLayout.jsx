"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedLayout = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("react");
const Box_1 = require("components/Box/Box");
const ButtonLink_1 = require("components/ButtonLink/ButtonLink");
const Loader_1 = require("components/Loader/Loader");
const SharedLayout = () => {
    return (<>
      <Box_1.Box as="header" py={4} px={5} bg="bgPrimary">
        <Box_1.Box as="nav" display="flex" gridGap={5} justifyContent="center">
          <ButtonLink_1.ButtonLink to={'/'}>Home</ButtonLink_1.ButtonLink>
          <ButtonLink_1.ButtonLink to={'movies'}>Movies</ButtonLink_1.ButtonLink>
        </Box_1.Box>
      </Box_1.Box>
      <main>
        <Box_1.Box px={5}>
          <react_2.Suspense fallback={<Loader_1.Loader />}>
            <react_router_dom_1.Outlet />
          </react_2.Suspense>
        </Box_1.Box>
      </main>
    </>);
};
exports.SharedLayout = SharedLayout;
//# sourceMappingURL=SharedLayout.jsx.map