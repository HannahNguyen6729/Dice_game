const stateDefault = {
  choose: true, //true: big ( >=11), false: small (<11)
  win: 0,
  rounds: 0,
  diceArr: [
    { id: 6, img: "../img/6.png" },
    { id: 5, img: "../img/5.png" },
    { id: 4, img: "../img/4.png" },
  ],
};
const diceReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHOOSE_VALUE": {
      state.choose = action.payload;
      return { ...state };
    }
    case "PLAY_GAME": {
      state.rounds += 1;
      let newDiceArr = [];
      for (let i = 0; i < state.diceArr.length; i++) {
        let randomId = Math.floor(Math.random() * 6 + 1);
        let newDice = {
          id: randomId,
          img: `../img/${randomId}.png`,
        };
        newDiceArr.push(newDice);
      }
      state.diceArr = newDiceArr;
      //calculate the total scores:
      let totalScore = newDiceArr.reduce(
        (total, curr) => (total += curr.id),
        0
      );
      if (
        (totalScore >= 11 && state.choose) ||
        (totalScore < 11 && state.choose === false)
      ) {
        state.win += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default diceReducer;
