import Descriptor from "../classes/Descriptor";

export function runTree(node: Descriptor, context: Record<string, any> = {}) {
  const output = node.code(context);
  if (output && typeof output === "object") {
    Object.assign(context, output);
  }

  node.children?.forEach((child) => runTree(child, context));
}
