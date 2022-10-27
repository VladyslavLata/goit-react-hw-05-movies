"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingMovie = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.RatingMovie = styled_components_1.default.p `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-weight: ${p => p.theme.fontWeights.medium};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ rating, theme }) => {
    if (rating >= 7) {
        return theme.colors.green;
    }
    else if (rating < 5) {
        return theme.colors.red;
    }
    return theme.colors.yellow;
}};
`;
//# sourceMappingURL=Rating.styled.jsx.map