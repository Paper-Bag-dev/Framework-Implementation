// import Descriptor, { VirtualNode } from "../classes/Descriptor";

// export function instantizeNode(obj: VirtualNode): Descriptor {
//   const instance = new obj.type(obj.props ?? {});
//   if (!(instance instanceof Descriptor)) {
//     throw new Error("Not a Descriptor!");
//   }
//   instance.props = obj.props?.props ?? {};
//   return instance;
// }

// export function graphBuilder(root: VirtualNode): VirtualNode | null {
//   const instance = instantizeNode(root);
//   const vNode = instance.render();

//   if (!vNode.children) {
//     return vNode;
//   }

//   const resolvedChildren: VirtualNode[] = [];
//   vNode.children.forEach((child: VirtualNode) => {
//     const builtChild = graphBuilder(child);
//     if (builtChild !== null) {
//       resolvedChildren.push(builtChild);
//     }
//   });

//   vNode.children = resolvedChildren;

//   return vNode;
// }
