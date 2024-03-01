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
    if (!v1.adjacent.has(v2)) {
      v1.adjacent.add(v2);
      v2.adjacent.add(v1);
    }
  }

  /** Add edges between v1 and v2. */
  addEdges(nodes: GNodeStr[]): void {
    for (const [v1, v2] of nodes) {
      this.addEdge(v1, v2);
    }
  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: GNodeStr, v2: GNodeStr): void {
    if (v1.adjacent.has(v2)) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
    }
  }

  /** Remove node from graph. */
  removeNode(node: GNodeStr): void {
    for (const n of this.nodes) {
      if (n.adjacent.has(node)) {
        n.adjacent.delete(node);
      }
    }
    node.adjacent.clear();
    this.nodes.delete(node);
  }
}

export { GNodeStr, GraphStr };