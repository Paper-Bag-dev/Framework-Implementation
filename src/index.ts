import Descriptor, { Return } from "./core/classes/Descriptor";
import { runTree } from "./core/reconciler/runTreeCode";
import NodeApp from "./NodeApp";

class Root extends Descriptor {
    constructor(){
        super({});
    }

    code(){
        
    }

    @Return()
    render() {
        return Descriptor.createNode(null, NodeApp);
    }
}

const root = new Root();
root.render();
console.log(root);
runTree(root);

export default root;