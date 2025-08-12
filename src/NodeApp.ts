import express, {Express} from "express";
import Descriptor, { Return }  from "./core/classes/Descriptor";
import StartApp from "./StartApp";

class NodeApp extends Descriptor{
    app: Express | null = null;
    code(){
        const app = express();
        return {app};
    }

    @Return()
    render(){
        return Descriptor.createNode({app: this.app}, StartApp);
    }
}

export default NodeApp;