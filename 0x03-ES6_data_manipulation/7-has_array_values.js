export default function hasValuesFromArray(set, array) {
  const setArray = Array.from(set);
  for (const item of array) {
    const result = setArray.includes(item);
    if (result === false) return (false);
  }
  return (true);
}
