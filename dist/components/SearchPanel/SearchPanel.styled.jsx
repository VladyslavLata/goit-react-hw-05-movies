"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.SearchButton = exports.Input = exports.Label = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Label = styled_components_1.default.label `
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
exports.Input = styled_components_1.default.input `
  width: 300px;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.s};
  border-color: ${p => p.theme.colors.bgPrimary};
  border-radius: ${p => p.theme.radii.sm};
`;
exports.SearchButton = styled_components_1.default.button `
  padding: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  background-color: ${p => p.theme.colors.yellow};
  min-width: 100px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
`;
exports.Form = styled_components_1.default.form `
  display: flex;
  justify-content: center;
  margin-top: ${p => p.theme.space[4]}px;
`;
//# sourceMappingURL=SearchPanel.styled.jsx.map