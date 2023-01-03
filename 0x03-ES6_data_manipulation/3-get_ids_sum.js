export default function getStudentIdsSum(arr) {
  if (!(arr instanceof Array)) return [];
  const newarr = arr.map((x) => x.id);
  return newarr.reduce((x, y) => x + y, 0);
}
