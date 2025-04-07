export function range(start: number, end: number): number[] {
  return [...Array(end).keys()].map((i) => i + start);
}
