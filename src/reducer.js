const initialState = {
  greeting: 'Buenos días',
  isMorning: true,
  user: null,
};

const changeMessage = isMorning => isMorning ? 'Buenas noches' : 'Buenos días';
const changeTurn = isMorning => isMorning ? false : true;

export default (state = initialState, {type, payload}) => {
  if (type === 'RESET') {
    return initialState;
  }
  if (type === 'CHANGE_TURN') {
    return Object.assign({}, state,
      {isMorning : changeTurn(state.isMorning)},
      {greeting: changeMessage(state.isMorning)})
  }

  return state;
}
