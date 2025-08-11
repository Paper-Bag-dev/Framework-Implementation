type Props = (() => void) | typeof Descriptor | string | {};

export function Return(fn?: () => void) {
  return function <T extends Descriptor>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) {
    const original = descriptor.value!;
    
    descriptor.value = function (this: T, ...args: any[]) {
      this.children = original.apply(this, args);
      if (fn) fn.call(this);
      return this.children;
    };

    return descriptor;
  };
}

interface vNode{
  name: string;
  inputs: Record<string, Props> | null,
  outputs?: Record<string, Props> | null,
  children: vNode[] | null;
}

interface vView{
  type: string;
  props: Record<string, Props>;
  children: vNode[] | null;
}

export class Descriptor<Props = {}> {
  __type = "Descriptor";
  props: Props;
  children: Descriptor[] | null = null;
  outputs: Record<string, any> | null = null;

  constructor(props: Props) {
    this.props = props;
  }

  code() {
    throw new Error("Method 'code' must be implemented.");
  }

  // static createNode(Component: typeof Descriptor, props: any = null, ...children: Descriptor[] ): vNode {
  //   const instance = new Component(props);
  //   instance.children = children;
  //   return instance.render();
  // }
  
  static createNode(props: any = null, ...children: Array<new (props: any) => Descriptor<any>>){
    const initInstances = children.map((childClass, ind) => {
      const childInstance = new childClass(props);
      childInstance.render();
      return childInstance;
    })

    return initInstances;
  }

  render(): any{
    throw new Error("Method 'code' must be implemented.");
  };

}

export default Descriptor;
