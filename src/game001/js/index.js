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
  const list = questions.map((item, index) => {

    const $li = document.createElement('li');

    // create p element with question
    const $p = document.createElement('p');
    $p.textContent = item.question;

    // create input + label with alternative
    const $input = document.createElement('input');
    $input.id = `radio-${index}`;
    $input.type = 'radio';
    $input.value = index;

    const $label = document.createElement('label');
    $label.htmlFor = `radio-${index}`;
    $label.textContent = item.alternatives[index];

    $li.appendChild($p);
    $li.appendChild($input);
    $li.appendChild($label);
    return $li;
  });


  // $contentSlot.appendChild($li);

  // return $contentSlot;
  return list;
};


window.addEventListener('load', () => {
  loadContent(app.state.questions);
});

$buttonNext.addEventListener('click', () => {
  incrementPosition();
});