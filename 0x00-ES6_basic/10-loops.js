export default function appendToEachArrayValue(array, appendString) {
  for (idx of array) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
