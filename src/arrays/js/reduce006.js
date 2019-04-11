// ****************************************
// Array.prototype.reduce()
// Bonding arrays contained in an array of objects using the spread operator and initialValue
// allTitles - list which will contain all jedi's title +  additional list contained in initialValue
// remove duplicated items.
// ****************************************
const reduce006 = () => {
  const jediTitles = [
    { name: 'obi wan kenobi', titles: [ 'Jedi Youngling', 'padawan', 'jedi knight', 'jedi master', 'general', 'Force wielder'] },
    { name: 'Kanan Jarrus', titles: [ 'Jedi Youngling', 'padawan', 'jedi knight'] },
    { name: 'luke skywalker', titles: [ 'Jedi Youngling', 'padawan', 'jedi knight', 'jedi master'] },
    { name: 'Rey', titles: [ 'Force user'] },
    { name: 'Luminara Unduli', titles: [ 'Jedi Youngling', 'padawan', 'jedi master'] },
    { name: 'Ahsoka Tano', titles: [ 'Jedi Youngling', 'padawan', 'Force user'] }
  ];

  const titles = jediTitles.reduce((allTitlesArray, currentItem, currentIndex, array) => {
    const itemTitlesArray= currentItem.titles;
    return [...allTitlesArray, ...itemTitlesArray];
  }, ['Force-sensitive kid']);

  // Remove duplicate items in array
  const titlesNoDuplicates = titles.reduce((titlesArray, currentValue, currentIndex, array ) => {
    const elementExists = titlesArray.indexOf(currentValue) > -1;
    if (!elementExists){
      titlesArray.push(currentValue);
    }
    return titlesArray;
  }, []);

  console.log(titlesNoDuplicates);

};

// expected array:
// ['Force-sensitive kid', 'Jedi Youngling', 'padawan', 'jedi knight', 'jedi master', 'general', 'Force wielder', 'Force user'];

reduce006();
module.exports = reduce006;