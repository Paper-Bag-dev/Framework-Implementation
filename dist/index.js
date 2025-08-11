"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Descriptor_1 = __importDefault(require("./core/classes/Descriptor"));
const NodeApp_1 = __importDefault(require("./NodeApp"));
class Root extends Descriptor_1.default {
    render() {
        return Descriptor_1.default.createNode(NodeApp_1.default);
    }
}
const root = Descriptor_1.default.createNode(NodeApp_1.default);
console.log(root);
exports.default = root;
