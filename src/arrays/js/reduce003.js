// ****************************************
// Array.prototype.reduce()
// Flatten an array of arrays
// ****************************************
const reduce003 = () => {
  const jediWeapons = [ ['obi wan kenobi', 'blue'], ['Kanan Jarrus', 'green'], ['luke skywalker', 'blue'], ['Rey', 'blue'], ['Luminara Unduli', 'yellow']];
  const result = jediWeapons.reduce((flattenArray, currentItem, currentIndex, Array) => {
    const newFlattenArray = flattenArray.concat(currentItem);
    return newFlattenArray;
  }, []);
  return result;
};
module.exports = reduce003;