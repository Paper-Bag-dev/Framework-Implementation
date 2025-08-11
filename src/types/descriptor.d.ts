type DescriptorOutputs = {
  [key: string]: string | Descriptor | object | (() => void) | null;
};

// type inputs = Object | (() => void) | string;

type inputs = {
  [key:string] : NodeApp | object | (() => void);
};

type Descriptor = (inputs?) => DescriptorOutputs;
