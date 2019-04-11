// ****************************************
// Array.prototype.reduce()
// Counting instances of values in an object
// ****************************************
const reduce001 = () => {
  const jediWeapons = [
    { name: 'obi wan kenobi', lightSaberColor: 'blue' },
    { name: 'Kanan Jarrus', lightSaberColor: 'green' },
    { name: 'luke skywalker', lightSaberColor: 'blue' },
    { name: 'Rey', lightSaberColor: 'blue' },
    { name: 'Luminara Unduli', lightSaberColor: 'yellow' }
  ];
  const countedLightSabers = jediWeapons.reduce((allLightSabers, item, currentIndex, array) => {
    if(item.lightSaberColor in allLightSabers){
      allLightSabers[item.lightSaberColor]++;
    }else {
      allLightSabers[item.lightSaberColor] = 1;
    }
    return allLightSabers;
  }, {});

  return countedLightSabers;
};
module.exports = reduce001;
