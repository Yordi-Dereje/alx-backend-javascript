export default function updateUniqueItems(olMap) {
  if (!(olMap instanceof Map)) throw Error('Cannot process');
  olMap.forEach((value, key) => {
    if (value === 1) olMap.set(key, 100);
  });
}
