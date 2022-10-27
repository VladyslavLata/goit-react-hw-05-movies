"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBack = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
exports.ButtonBack = (0, styled_components_1.default)(react_router_dom_1.Link) `
  display: inline-block;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  background-color: ${p => p.theme.colors.yellow};
  min-width: 100px;
  border-radius: ${p => p.theme.radii.sm};
  color: ${p => p.theme.colors.black};
`;
//# sourceMappingURL=ButtonBack.styled.jsx.map