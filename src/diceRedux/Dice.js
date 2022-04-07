import React, { Component } from 'react'
import ContentGame from './ContentGame'
import './dice.css';
import MiniDices from './MiniDices';
import {connect} from 'react-redux';

 class Dice extends Component {
  render() {
    return (
      <div className="game text-center">
          <h1 className='text-primary my-5 display-4'>DICE GAME</h1>
          <div className="row">
              <div className="col-5">
                  <button 
                    className="btn btn-primary" 
                    onClick={() =>{this.props.chooseValue(false)}}
                    style={{width: 150, height: 150, fontSize: 30}}
                    >SMALL</button>
              </div>
              <div className="col-2"> <MiniDices/></div>
              <div className="col-5">
              <button 
                    className="btn btn-primary" 
                    onClick={() =>{this.props.chooseValue(true)}}
                    style={{width: 150, height: 150, fontSize: 30}}
                    >BIG</button>
              </div>
          </div>
          <div>
            <ContentGame/>
          </div>
      </div>
    )
  }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        chooseValue: (payload)=>{
            let action ={
                type: 'CHOOSE_VALUE',
                payload
            };
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(Dice);
