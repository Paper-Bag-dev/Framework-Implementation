"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTree = runTree;
function runTree(node, context = {}) {
    const output = node.code(context);
    if (output && typeof output === "object") {
        Object.assign(context, output);
    }
    node.children?.forEach((child) => runTree(child, context));
}
