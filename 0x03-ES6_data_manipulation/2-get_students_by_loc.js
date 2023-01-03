export default function getStudentsByLocation(arr, str) {
  if (!(arr instanceof Array)) return [];
  return arr.filter((x) => x.location === str);
}
