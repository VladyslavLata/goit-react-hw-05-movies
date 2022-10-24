"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorName = exports.Image = exports.ImgWrap = exports.CastCard = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.CastCard = styled_components_1.default.li `
  width: 300px;
  display: flex;
  flex-direction: column;
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
exports.ActorName = styled_components_1.default.h3 `
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  flex-grow: 1;
`;
//# sourceMappingURL=CastCard.styled.js.map