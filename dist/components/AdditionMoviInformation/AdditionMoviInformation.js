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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionMoviInformation = void 0;
const ButtonLink_1 = require("components/ButtonLink/ButtonLink");
const Box_1 = require("components/Box/Box");
const SC = __importStar(require("./AdditionMoviInformation.styled"));
const AdditionMoviInformation = () => {
    return (<Box_1.Box bg={'bgPrimary'} mt={4} height="100px">
      <SC.Title>Addition information</SC.Title>
      <Box_1.Box as="ul" mt={4} display="flex" justifyContent="center">
        <Box_1.Box as="li" mr={5}>
          <ButtonLink_1.ButtonLink to={'cast'}>Cast</ButtonLink_1.ButtonLink>
        </Box_1.Box>
        <li>
          <ButtonLink_1.ButtonLink to={'reviews'}>Reviews</ButtonLink_1.ButtonLink>
        </li>
      </Box_1.Box>
    </Box_1.Box>);
};
exports.AdditionMoviInformation = AdditionMoviInformation;
//# sourceMappingURL=AdditionMoviInformation.js.map