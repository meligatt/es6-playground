// ****************************************
// Array.prototype.reduce()
// Flatten an array of arrays without the color
// ****************************************
const reduce005 = () => {
  const jediWeapons = [ ['obi wan kenobi', 'blue'], ['Kanan Jarrus', 'green'], ['luke skywalker', 'blue'], ['Rey', 'blue'], ['Luminara Unduli', 'yellow']];
  const flattenArrayJustJedi = jediWeapons.reduce((flattenArray, currentItem, currentIndex, Array) => {
    const slicedItem = currentItem.slice(0,1);
    const newFlattenArray = flattenArray.concat(slicedItem);
    return newFlattenArray;
  }, []);
  return flattenArrayJustJedi;
};
module.exports = reduce005;