import React, { Component } from "react";
import { connect } from "react-redux";

class MiniDices extends Component {
  render() {
    return (
      <div>
        {this.props.dice.diceArr.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.id}
            style={{ width: 50, height: 50 }}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dice: state.diceReducer,
  };
};
export default connect(mapStateToProps)(MiniDices);
