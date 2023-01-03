export default function createInt8TypedArray(length, position, val) {
  if (position >= length) throw Error('Position outside range');
  const dv = new DataView(new ArrayBuffer(length));
  dv.setUint8(position, val);
  return dv;
}
