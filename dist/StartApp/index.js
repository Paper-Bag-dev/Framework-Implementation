"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Descriptor_1 = __importDefault(require("../core/classes/Descriptor"));
class StartApp extends Descriptor_1.default {
    code() {
        this.props.app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
    render() {
        return {
            name: "StartApp",
            inputs: null,
            children: []
        };
    }
}
exports.default = StartApp;
