export default function setFromArray(arr) {
  const s = new Set();
  // eslint-disable-next-line
    arr.map(val => { s.add(val) });
  return s;
}
