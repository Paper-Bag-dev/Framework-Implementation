"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Descriptor_1 = __importDefault(require("./core/classes/Descriptor"));
const StartApp_1 = __importDefault(require("./StartApp"));
class NodeApp extends Descriptor_1.default {
    constructor() {
        super(...arguments);
        this.app = null;
    }
    code() {
        this.app = (0, express_1.default)();
    }
    render() {
        return {
            name: "NodeApp",
            inputs: null,
            children: [Descriptor_1.default.createNode(StartApp_1.default, { app: this.app })]
        };
    }
}
exports.default = NodeApp;
