"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.FooterMovie = exports.Image = exports.ImgWrap = exports.LinkTo = exports.CardMovie = exports.Gallery = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
exports.Gallery = styled_components_1.default.ul `
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[4]}px 0;
`;
exports.CardMovie = styled_components_1.default.li `
  display: flex;
  width: 300px;
  transition: transform 200ms ease-out, box-shadow 200ms ease-out;
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: -1px 7px 25px -8px rgba(0, 0, 0, 1);
  }
`;
exports.LinkTo = (0, styled_components_1.default)(react_router_dom_1.Link) `
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.black};
`;
exports.ImgWrap = styled_components_1.default.div `
  width: 300px;
  height: 450px;
`;
exports.Image = styled_components_1.default.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
exports.FooterMovie = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
exports.Title = styled_components_1.default.h3 `
  display: inline-flex;
  align-items: center;
  width: 240px;
  ${p => p.theme.fontSizes.m}
`;
//# sourceMappingURL=GalleryMovies.styled.js.map