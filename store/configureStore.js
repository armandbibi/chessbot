import { createStore, combineReducers } from 'redux';
import { highlightChessboardSquare } from './actions/chessboardSquare';
import boardReducer from './reducers/boardReducer';
import chessboardSquareReducer from './reducers/chessBoardSquareReducer';
const rootReducer = combineReducers({
    board: boardReducer,
    squares: chessboardSquareReducer,
});
const configureStore = () => {
    return createStore(rootReducer);
};
export default configureStore;
