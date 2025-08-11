import Descriptor from "./Descriptor";

class Applet {
    __type: string = "__root";
    entry: Descriptor | null;
    nodes: {
        [key: string]: Descriptor;
    } | null;

    views: {
    [key: string]: any;
    } | null

    outputs: {
        [key: string] : Descriptor;
    } | null;

    constructor(){
        this.entry = null;
        this.nodes = null;
        this.views = null;
        this.outputs = null;
    }

    render(){
        return {
            __type: this.__type,
            entry: this.entry,
            nodes: this.nodes,
            views: this.views,
            outputs: this.outputs
        }
    }
}

export default Applet;