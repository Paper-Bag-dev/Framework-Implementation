import express, {Express} from "express";
import Descriptor, { Return }  from "./core/classes/Descriptor";
import StartApp from "./StartApp";

class NodeApp extends Descriptor{
    app: Express | null = null;
    code(){
        this.app = express();
    }

    @Return()
    render(){
        return Descriptor.createNode(null, StartApp, StartApp);
    }
}

export default NodeApp;