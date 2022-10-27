"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
exports.Link = (0, styled_components_1.default)(react_router_dom_1.NavLink) `
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: ${p => p.theme.space[3]}px;
  min-width: 100px;
  text-align: center;
  border-radius: ${p => p.theme.radii.sm};
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.bgWhite};

  &.active {
    background-color: ${p => p.theme.colors.accent};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${p => p.theme.colors.bgPrimaryAccent};
  }
`;
//# sourceMappingURL=ButtonLink.styled.jsx.map