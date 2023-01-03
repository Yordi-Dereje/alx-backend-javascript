export default function cleanSet(set, str) {
  if (str === '' || !(typeof str === 'string')) return '';
  const arr = [];
  for (const val of set) {
    if (val && val.startsWith(str)) arr.push(val.slice(str.length));
  }
  return arr.join('-');
}
