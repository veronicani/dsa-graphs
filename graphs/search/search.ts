import { Queue } from "../common/queue";
import { GNodeStr } from "../graph/graph";
import { Stack } from "../common/stack";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: GNodeStr,
  result: string[] = [],
  visited = new Set([start])): string[] {

  // base case
  if (result.length === visited.size) return result;

  result.push(start.value);

  for (const n of start.adjacent) {
    if (!visited.has(n)) visited.add(n);
    rDfs(n, result, visited);
  }

  return result;

}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {

  const toVisit = new Stack<GNodeStr>([start]);
  const seen = new Set<GNodeStr>();
  const out: string[] = [];

  while (!toVisit.isEmpty()) {
    const curr = toVisit.pop();

    if (!seen.has(curr)) {
      seen.add(curr);
      out.push(curr.value);
    }

    for (const n of curr.adjacent) {
      if (!seen.has(n)) {
        toVisit.push(n);
      }
    }
  }

  return out;
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

    for (const n of curr.adjacent) {
      if (!seen.has(n)) {
        toVisit.enqueue(n);
      }
    }
  }

  return out;
}


export { iDfs, rDfs, bfs };