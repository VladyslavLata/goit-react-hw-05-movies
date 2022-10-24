"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.TableCell = exports.ImgWrap = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ImgWrap = styled_components_1.default.div `
  box-shadow: 7px 10px 26px -16px rgba(0, 0, 0, 1);
`;
exports.TableCell = styled_components_1.default.td `
  padding: ${p => p.theme.space[3]}px 0;

  &:first-child {
    min-width: 100px;
    padding-right: ${p => p.theme.space[4]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
exports.Table = styled_components_1.default.table `
  max-width: 900px;
`;
//# sourceMappingURL=MovieDetailsBox.styled.js.map