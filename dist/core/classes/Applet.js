"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Applet {
    constructor() {
        this.__type = "__root";
        this.entry = null;
        this.nodes = null;
        this.views = null;
        this.outputs = null;
    }
    render() {
        return {
            __type: this.__type,
            entry: this.entry,
            nodes: this.nodes,
            views: this.views,
            outputs: this.outputs
        };
    }
}
exports.default = Applet;
