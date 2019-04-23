const questions = require('./data.js');
const $buttonNext = document.querySelector('#next');
const $contentSlot = document.querySelector('#content');
const $gridSlot = document.querySelector('#grid');

const BOARD_WIDTH = 5;
const initialState = {
  currentPosition: -1,
  currentQuestion: 0,
  grid: new Array(BOARD_WIDTH).fill(0),
  questions: questions,
  results: []
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

const loadContent = (questions) => {
  const list = questions.map((item, index) => {
    const $li = document.createElement('li');
    if (index === 0){
      $li.setAttribute('style', 'display: block');
    } else {
      $li.setAttribute('style', 'display: none');
    }

    const $pQuestion = document.createElement('p');
    $pQuestion.textContent = `${index}) ${item.question}`;

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

  return list;
};

const isAlternativeCorrect = () => {
  // get current question
  const currentQuestion = app.state.currentQuestion;

  // retrieve correct alternative from current question array
  const correctAlternative = app.state.questions[currentQuestion]['correct'];

  // compare with selected option
  const selectedAlternative = parseInt(document.querySelector('input[name=alternative]:checked').value);

  if (correctAlternative !== selectedAlternative){
    app.state.results[currentQuestion] = false;
    return false;
  }

  app.state.results[currentQuestion] = true;
  return true;
};

const loadNextQuestion = () => {
  const $liCollection = $contentSlot.getElementsByTagName('li');

  // display: none current li
  const currentQuestion = app.state.currentQuestion;
  $liCollection[currentQuestion].setAttribute('style', 'display: none');

  // display: block next li
  const nextQuestion = app.state.currentQuestion + 1;
  $liCollection[nextQuestion].setAttribute('style', 'display: block');

  setState({ currentQuestion: nextQuestion });
};

const incrementGridPosition = () => {
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

const render = () => {
  // const currentPosition = app.state.currentPosition;
  $gridSlot.textContent = app.state.grid;
};

window.addEventListener('load', () => {
  const list = loadContent(app.state.questions);
  list.forEach((item) => {
    $contentSlot.appendChild(item);
  });
});

$buttonNext.addEventListener('click', () => {
  const correct = isAlternativeCorrect();
  if (correct){
    incrementGridPosition();
  }
  if (app.state.currentPosition < BOARD_WIDTH){
    loadNextQuestion();
  }
  render();
});