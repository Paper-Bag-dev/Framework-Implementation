"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Applet {
    __type = "__root";
    entry;
    nodes;
    views;
    outputs;
    constructor() {
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
