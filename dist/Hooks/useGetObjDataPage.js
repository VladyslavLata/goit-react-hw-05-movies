"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetObjDataPage = void 0;
const react_1 = require("react");
const useGetObjDataPage = (getDataMovie, movieParam) => {
    const [data, setData] = (0, react_1.useState)({});
    const [status, setStatus] = (0, react_1.useState)('idle');
    const [error, setError] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        const getMoviesDetails = () => __awaiter(void 0, void 0, void 0, function* () {
            setStatus('pending');
            try {
                const response = yield getDataMovie(movieParam);
                setData(Object.assign({}, response));
                setStatus('resolved');
            }
            catch (error) {
                setError(error);
                setStatus('rejected');
            }
        });
        getMoviesDetails();
    }, [getDataMovie, movieParam]);
    return [data, status, error, setData, setStatus, setError];
};
exports.useGetObjDataPage = useGetObjDataPage;
//# sourceMappingURL=useGetObjDataPage.js.map