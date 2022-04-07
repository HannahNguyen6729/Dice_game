import {combineReducers} from 'redux';
import DiceReducer from './DiceReducer';

const rootReducer = combineReducers({
    diceReducer: DiceReducer,
});
export default rootReducer;