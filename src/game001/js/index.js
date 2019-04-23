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

const loadContent = (index, item) => {
  // create li element
  const $li = document.createElement('li');

  // create p element with question
  const $p = document.createElement('p');
  $p.textContent = item.question;

  // loop for the alternatives to add them from item.alternatives array.
  // create input + label with alternative
  const alternativeIndex = 0;
  const $input = document.createElement('input');
  $input.id = `radio-${alternativeIndex}`;
  $input.type = 'radio';
  $input.value = index;

  const $label = document.createElement('label');
  $label.htmlFor = `radio-${alternativeIndex}`;
  $label.textContent = item.alternatives[alternativeIndex];

  // <li>
  //  <p id="question">Question goes here</p>
  //  <input type="radio" id="q1" name="question" value="1">
  //  <label for="q1">Option 1</label>
  //  <input type="radio" id="q1" name="question" value="1">
  //  <label for="q1">Option 1</label>
  // </li>
  $li.appendChild($p);
  $li.appendChild($input);
  $li.appendChild($label);

  $contentSlot.appendChild($li);

  return $contentSlot;
};


window.addEventListener('load', () => {
  console.log(loadContent(0, app.state.questions[0]));
});

$buttonNext.addEventListener('click', () => {
  incrementPosition();
});