// import Descriptor, { VirtualNode } from "./Descriptor";

// class Root extends Descriptor {
//     constructor({App} : {App: typeof Descriptor}){
//         super({App});
//     }
//     render(): VirtualNode {
//         const App = this.props?.App;
//         if (!App) throw new Error("Root: No App node passed.");
//         return Descriptor.createNode(Root, null, Descriptor.createNode(App));
//     }
// }

// export function createRoot(AppNode: typeof Descriptor): Descriptor {
//     const root = new Root({App: AppNode});
//     return root;
// }
