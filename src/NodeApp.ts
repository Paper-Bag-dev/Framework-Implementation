import express, {Express} from "express";
import Descriptor  from "./core/classes/Descriptor";
import StartApp from "./StartApp";

class NodeApp extends Descriptor{
    app: Express | null = null;
    code(){
        this.app = express();
    }
    
    render(){
        return {
            name: "NodeApp",
            inputs: null,
            children: [Descriptor.createNode(StartApp, {app: this.app})] 
        }
    }
}

export default NodeApp;