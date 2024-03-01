import { Queue } from "../common/queue";
import { GNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: GNodeStr,
    result: string[] = [],
    visited = new Set([start])): string[] {
  return ["todo"];
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (recursive version)  */

function bfs(start: GNodeStr): string[] {

  const toVisit = new Queue<GNodeStr>([start]);
  const seen = new Set<GNodeStr>();
  const out: string[] = [];

  while (!toVisit.isEmpty()) {
    const curr = toVisit.dequeue();

    if (!seen.has(curr)) {
      seen.add(curr);
      out.push(curr.value);
    }


  }


  return out;
}


export { iDfs, rDfs, bfs };