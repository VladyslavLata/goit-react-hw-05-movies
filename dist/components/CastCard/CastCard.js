"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCard = void 0;
const SC = __importStar(require("./CastCard.styled"));
const noUserProfile_webp_1 = __importDefault(require("../../img/noUserProfile.webp"));
const CastCard = ({ cast }) => {
    return cast.map(({ name, profile_path, credit_id }) => (<SC.CastCard key={credit_id}>
      <SC.ImgWrap>
        <SC.Image src={profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : noUserProfile_webp_1.default} alt={name}/>
      </SC.ImgWrap>
      <SC.ActorName>{name}</SC.ActorName>
    </SC.CastCard>));
};
exports.CastCard = CastCard;
//# sourceMappingURL=CastCard.js.map