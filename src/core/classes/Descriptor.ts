type Props = (() => void) | Descriptor | string | object;

interface vNode{
  name: string;
  inputs?: Record<string, Props> | null,
  outputs?: Record<string, Props> | null,
  children: vNode[] | null;
}

interface vView{
  type: string;
  props: Record<string, Props>;
  children: vNode[] | null;
}

export abstract class Descriptor<P = {}> {
  __type = "Descriptor";
  props: P;
  children: Descriptor[] | null = null;
  outputs: Record<string, any> | null = null;

  constructor(props: P) {
    this.props = props;
  }

  code() {
    throw new Error("Method 'code' must be implemented.");
  }

  static createNode(Component: new (props?: any) => Descriptor, props: any = null, ...children: Descriptor[] ): vNode {
    const instance = new Component(props);
    instance.children = children;
    return instance.render();
  }

  abstract render(): vNode;
}

export default Descriptor;
