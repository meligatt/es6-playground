// ******************
// using Promises and fetch()
// ******************

// let url = 'https://swapi.co/api/people/1';
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     let html = '';
//     data.films.forEach((element, i) => {
//       return html += `
//           <tr>
//             <td>${i} ${element}</td>
//           </tr>`;
//     });
//     document.getElementById('films').innerHTML = html;
//   })
//   .catch((e)=> console.log('error >>>', e));

// ******************
// using a mocked service
// ******************
import * as service from './film-service-mock';

service.findAll()
  .then((response) => {
    let html = '';
    response.films.forEach((element, i) => {
      return html += `
        <tr>
          <td>${i} ${element.name}</td>
          <td>${element.stars}</td>
        </tr>`;
    });
    document.getElementById('films').innerHTML = html;
  })
  .catch((e)=> console.log('error >>>', e));