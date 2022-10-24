"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Message = styled_components_1.default.p `
  margin-top: ${p => p.theme.space[5]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
//# sourceMappingURL=Message.styled.js.map