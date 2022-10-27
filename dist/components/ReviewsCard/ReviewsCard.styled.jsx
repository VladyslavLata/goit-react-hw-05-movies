"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.Post = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Post = styled_components_1.default.li `
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.bgPrimary};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 10px 8px 26px -16px rgba(0, 0, 0, 1);
`;
exports.Title = styled_components_1.default.h3 `
  margin-bottom: ${p => p.theme.space[3]}px;
`;
//# sourceMappingURL=ReviewsCard.styled.jsx.map