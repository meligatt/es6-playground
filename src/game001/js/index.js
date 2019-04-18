// const $buttonNext = document.querySelector('#next');
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

  const updatePositionInGrid = (data) => {
    const grid = data.grid.map((item, index) => (index === nextPosition) ?  1 : 0);
    return { grid };
  };

  setState({ currentPosition: nextPosition }, null);
  setState(null, updatePositionInGrid);
};

// const updateGrid = () => {
//   const currentPos = app.state.currentPosition;
//   const nextPos = currentPos + 1;
//   board.data.board[currentPos] = 0;
//   board.data.board[nextPos] = 1;
//   return;
// };
console.log('initial state >>>',app());

incrementPosition();
console.log('state >>>',app());





// this.setState(
//   (state) => {
//   const list = state.list.map((item, j) => {
//     if (j === i){
//       return item + 1;
//     } else {
//       return item;
//     }
//   });

//   return {
//     list,
//   };
// });
