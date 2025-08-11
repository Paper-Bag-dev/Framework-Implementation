"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descriptor = void 0;
class Descriptor {
    constructor(props) {
        this.__type = "Descriptor";
        this.children = null;
        this.outputs = null;
        this.props = props;
    }
    code() {
        throw new Error("Method 'code' must be implemented.");
    }
    static createNode(Component, props = null, ...children) {
        const instance = new Component(props);
        instance.children = children;
        return instance.render();
    }
}
exports.Descriptor = Descriptor;
exports.default = Descriptor;
