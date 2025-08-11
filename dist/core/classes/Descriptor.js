"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descriptor = void 0;
exports.Return = Return;
function Return(fn) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            this.children = original.apply(this, args);
            if (fn)
                fn.call(this);
            return this.children;
        };
        return descriptor;
    };
}
class Descriptor {
    __type = "Descriptor";
    props;
    children = null;
    outputs = null;
    constructor(props) {
        this.props = props;
    }
    code() {
        throw new Error("Method 'code' must be implemented.");
    }
    // static createNode(Component: typeof Descriptor, props: any = null, ...children: Descriptor[] ): vNode {
    //   const instance = new Component(props);
    //   instance.children = children;
    //   return instance.render();
    // }
    static createNode(props = null, ...children) {
        const initInstances = children.map((childClass, ind) => {
            const childInstance = new childClass(props);
            childInstance.render();
            return childInstance;
        });
        return initInstances;
    }
    render() {
        throw new Error("Method 'code' must be implemented.");
    }
    ;
}
exports.Descriptor = Descriptor;
exports.default = Descriptor;
