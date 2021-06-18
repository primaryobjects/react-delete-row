"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", { value: true });
require("./ReactDeleteRow.css");
const react_1 = __importStar(require("react"));
const ReactDeleteRow = ({ data, className, iconClassName, children, deleteElement = 'X', delay = 300, onDelete, onDeleteComplete }) => {
    const [toDelete, setToDelete] = react_1.useState();
    const [isDeleted, setIsDeleted] = react_1.useState();
    return (react_1.default.createElement(react_1.default.Fragment, null, !isDeleted && (react_1.default.createElement("tr", { className: className + (toDelete ? ' fade' : '') },
        children,
        react_1.default.createElement("td", null,
            react_1.default.createElement("button", { type: 'button', className: 'btn', onClick: (ev) => {
                    if (onDelete && onDelete(data)) {
                        setToDelete(true);
                        setTimeout(function () {
                            setIsDeleted(true);
                            onDeleteComplete && onDeleteComplete(data);
                        }, delay);
                    }
                } },
                react_1.default.createElement("span", { className: iconClassName }, deleteElement)))))));
};
exports.default = ReactDeleteRow;
//# sourceMappingURL=ReactDeleteRow.js.map