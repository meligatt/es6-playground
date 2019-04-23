const questions = require('./data.js');
const $buttonNext = document.querySelector('#next');
const $contentSlot = document.querySelector('#content');

const BOARD_WIDTH = 5;
const initialState = {
  currentPosition: -1,
  grid: new Array(BOARD_WIDTH).fill(0),
  questions: questions
};

const app = () => {
  return app.state;
};
app.state = { ...initialState };

const setState = (obj, callback) => {
  if (obj){
    Object.keys(obj).forEach(key => {
      app.state[key] = obj[key];
    });
    return;
  }
  if (callback){
    const updatedState = callback(app.state);
    const newState = Object.assign({}, app.state, updatedState);
    app.state = newState;
    return;
  }
};

const incrementPosition = () => {
  const currentPos = app.state.currentPosition;
  const nextPosition = currentPos + 1;
  if (nextPosition === BOARD_WIDTH){
    alert('game over!', app.state);
    return;
  }
  const updatePositionInGrid = (data) => ({ grid: data.grid.map((item, index) => (index === nextPosition) ? 1 : 0) });
  setState({ currentPosition: nextPosition }, null);
  setState(null, updatePositionInGrid);

};

const loadContent = (questions) => {
  const list = questions.map((item) => {
    const $li = document.createElement('li');

    const $pQuestion = document.createElement('p');
    $pQuestion.textContent = item.question;

    const $divAlternatives = document.createElement('div');

    item.alternatives.forEach((alternative, index) => {
      const id = `${item.id}${index}`;

      const $input = document.createElement('input');
      $input.id = id;
      $input.type = 'radio';
      $input.value = index;
      $input.name = 'alternative';

      const $label = document.createElement('label');
      $label.htmlFor = id;
      $label.textContent = alternative;

      $divAlternatives.appendChild($input);
      $divAlternatives.appendChild($label);
    });

    $li.appendChild($pQuestion);
    $li.appendChild($divAlternatives);
    return $li;
  });

  list.forEach((item) => {
    $contentSlot.appendChild(item);
  });

  return $contentSlot;
};


window.addEventListener('load', () => {
  loadContent(app.state.questions);
});

$buttonNext.addEventListener('click', () => {
  incrementPosition();
});