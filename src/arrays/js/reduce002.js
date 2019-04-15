// ****************************************
// Array.prototype.reduce()
// Grouping objects by a property value
// ****************************************
const reduce002 = () => {
  const jediDetails = [
    { name: 'obi wan kenobi', lightSaberColor: 'blue', age: 30 },
    { name: 'Kanan Jarrus', lightSaberColor: 'green' , age: 30 },
    { name: 'luke skywalker', lightSaberColor: 'blue' , age: 16 },
    { name: 'Rey', lightSaberColor: 'blue', age: 21 },
    { name: 'Luminara Unduli', lightSaberColor: 'yellow', age: 32 }
  ];

  const groupedByProp = (array, prop) => {
    return array.reduce((resultObject, item, currentIndex, array) => {
      const theKey = item[prop];
      if (!(theKey in resultObject)){
        resultObject[theKey] = [];
      }
      resultObject[theKey].push(item);
      return resultObject;
    }, {});
  };
  // const result = groupedByProp(jediDetails, 'name');
  // const result2 = groupedByProp(jediDetails, 'lightSaberColor');
  // const result3 = groupedByProp(jediDetails, 'age');
  // console.log(result);
  // console.log(result2);
  // console.log(result3);
};



/**
expected:
const resultObject =
  {
    blue: [
      { name: 'obi wan kenobi', lightSaberColor: 'blue' },
      { name: 'luke skywalker', lightSaberColor: 'blue' },
      { name: 'Rey', lightSaberColor: 'blue' },
    ],
    green: [
      { name: 'Kanan Jarrus', lightSaberColor: 'green' },
    ],
    yellow: [
      { name: 'Luminara Unduli', lightSaberColor: 'yellow' }
    ]
  };
*/
module.exports = reduce002;