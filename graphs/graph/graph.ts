/** Graph Node class. */

class GNodeStr {
  value: string;
  adjacent: Set<GNodeStr>;

  constructor(value: string, adjacent = new Set<GNodeStr>()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Undirected graph. */

class GraphStr {
  nodes: Set<GNodeStr>;

  constructor() {
    this.nodes = new Set();
  }

  /** Add node to graph. */
  addNode(node: GNodeStr): void {
    // TODO: don't need the logic gate here
    if (!this.nodes.has(node)) this.nodes.add(node);
  }

  /** Add array of nodes to graph. */
  addNodes(nodeArray: GNodeStr[]): void {
    for (const node of nodeArray) {
      this.addNode(node);
    }
  }

  /** Add edge between v1 and v2. */
  addEdge(v1: GNodeStr, v2: GNodeStr): void {
    // TODO: don't need guard here
    if (!v1.adjacent.has(v2)) {
      v1.adjacent.add(v2);
      v2.adjacent.add(v1);
    }
  }

  /** Add edges between v1 and v2. */
  // TODO: this is how you type this correctly
  addEdges(nodes: [GNodeStr, GNodeStr][]): void {
    for (const [v1, v2] of nodes) {
      this.addEdge(v1, v2);
    }
  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: GNodeStr, v2: GNodeStr): void {
    // TODO: you can call delete without having to check if it exists
    if (v1.adjacent.has(v2)) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
    }
  }

  /** Remove node from graph. */
  removeNode(node: GNodeStr): void {
    for (const n of this.nodes) {
      // TODO: don't need this guard
      if (n.adjacent.has(node)) {
        n.adjacent.delete(node);
      }
    }
    // You HAVE to do this to clear the deleted node's adjacents
    node.adjacent.clear();
    this.nodes.delete(node);
  }
}

export { GNodeStr, GraphStr };