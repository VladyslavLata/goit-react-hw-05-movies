"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Title = styled_components_1.default.h3 `
  text-align: center;
  padding-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
`;
//# sourceMappingURL=AdditionMoviInformation.styled.jsx.map