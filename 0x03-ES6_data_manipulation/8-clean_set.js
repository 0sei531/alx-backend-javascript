export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') return ('');
  if (startString === '') return ('');
  if (set instanceof Set === false) return ('');
  const editedStrings = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      editedStrings.push(value.slice(startString.length));
    }
  });
  return editedStrings.join('-');
}
