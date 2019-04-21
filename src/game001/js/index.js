const $buttonNext = document.querySelector('#next');

const BOARD_WIDTH = 5;
const initialState = {
  currentPosition: -1,
  grid: new Array(BOARD_WIDTH).fill(0)
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

$buttonNext.addEventListener('click', () => {
  incrementPosition();
});