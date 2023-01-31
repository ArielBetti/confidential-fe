import { Descendant, Node } from "slate";

export const messageSerialize = (nodes: Descendant[]) => {
  return nodes.map(n => Node.string(n)).join('\n\n')
};
