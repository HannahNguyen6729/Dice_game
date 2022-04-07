import React, { Component } from "react";
import { connect } from "react-redux";

class ContentGame extends Component {
  render() {
    const { choose, win, rounds } = this.props.dice;
    return (
      <div>
        <h1>
          Choose:  <span className="text-danger">{choose ? "BIG" : "SMALL"}</span>
        </h1>
        <h1>
          Win: <span className="text-success">{win}</span>
        </h1>
        <h1>
          Total rounds: <span className="text-primary">{rounds}</span>
        </h1>
        <button
          className="btn btn-success my-3"
          style={{fontSize:25}}
          onClick={() => {
            this.props.playGame();
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dice: state.diceReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentGame);
