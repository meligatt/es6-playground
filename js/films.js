let url = 'https://swapi.co/api/people/1';
fetch(url)
  .then(response => response.json())
  .then((data) => {
    let html = '';
    data.films.forEach((element, i) => {
      return html += `
          <tr>
            <td>${i} ${element}</td>
          </tr>`;
    });
    document.getElementById('films').innerHTML = html;
  })
  .catch((e)=> console.log('error >>>', e));