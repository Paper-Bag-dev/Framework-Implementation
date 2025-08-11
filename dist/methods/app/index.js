"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptor = void 0;
const server_1 = __importDefault(require("../../server"));
exports.descriptor = {
    name: "App",
    component: server_1.default,
};
