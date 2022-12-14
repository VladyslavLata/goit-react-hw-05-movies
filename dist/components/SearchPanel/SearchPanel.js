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
exports.SearchPanel = void 0;
const SC = __importStar(require("./SearchPanel.styled"));
const SearchPanel = ({ onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(e.currentTarget.elements.movie.value);
        e.currentTarget.reset();
    };
    return (<SC.Form onSubmit={handleSubmit}>
      <SC.Label htmlFor="movie">
        <SC.Input type="text" name="movie" id="movie" placeholder="Search movies"/>
      </SC.Label>
      <SC.SearchButton type="submit">Search</SC.SearchButton>
    </SC.Form>);
};
exports.SearchPanel = SearchPanel;
//# sourceMappingURL=SearchPanel.js.map