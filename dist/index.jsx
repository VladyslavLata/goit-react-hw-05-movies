"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
const theme_1 = require("constants/theme");
const App_1 = require("components/App/App");
require("./index.css");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter basename="/goit-react-hw-05-movies/">
      <styled_components_1.ThemeProvider theme={theme_1.theme}>
        <App_1.App />
      </styled_components_1.ThemeProvider>
    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>);
//# sourceMappingURL=index.jsx.map