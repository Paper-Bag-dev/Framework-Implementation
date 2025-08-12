import {Express} from "express";
import Descriptor from "../core/classes/Descriptor";

interface Props {
    app: Express
}

class StartApp extends Descriptor<Props>{
    constructor(props: Props){
        super(props);
    }
    code(context: { app: Express }){
        context.app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }

    render(){
        return {
            name: "StartApp",
            inputs: null,
        }
    }
}

export default StartApp;