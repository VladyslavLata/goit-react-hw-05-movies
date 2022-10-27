"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const react_1 = __importDefault(require("react"));
const react_loader_spinner_1 = require("react-loader-spinner");
const Loader = () => {
    return (<react_loader_spinner_1.ThreeDots color="#3f51b5" wrapperStyle={{ justifyContent: 'center' }}/>);
};
exports.Loader = Loader;
//# sourceMappingURL=Loader.jsx.map