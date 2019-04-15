let data = { 'films': [
  {
    'name': 'star wars a new hope',
    'stars': '5',
  },
  {
    'name': 'star wars The empire strikes back',
    'stars': '5',
  },
  {
    'name': 'star wars The return of the jedi',
    'stars': '4',
  }
] };
export let findAll = () => new Promise((resolve, reject) => {
  if (data){
    resolve(data);
  } else {
    reject('No films');
  }
});