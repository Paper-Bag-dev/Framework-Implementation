import Descriptor from "./core/classes/Descriptor";
import NodeApp from "./NodeApp";

class Root extends Descriptor {
    render() {
        return Descriptor.createNode(NodeApp);
    }
}

const root = Descriptor.createNode(NodeApp);
console.log(root);

export default root;