import { BOARD_CHANGE } from '../constants';
import Engine from '../../services/chessEngine/chessEngine';
import { generateMoves } from '../../utils/moves/legalMove';

const startingPosition = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

const testMovePosition = '8/3Q4/8/4B3/8/2K2N1/6R1/8';

const initialState = {
    board: Engine.fenToPieces(testMovePosition),
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOARD_CHANGE: {
            state = { ...state, board: movePiece(state.board, { payload: action.payload }) };
            return state;
        }

        default: {
            return state;
        }
    }
};
export default boardReducer;

function movePiece(board, { payload }) {
    generateMoves(board);

    const pieceToMove = payload.payload;
    const newBoard = [...board];
    let piece = newBoard[pieceToMove.oldFile][pieceToMove.oldRank];
    newBoard[pieceToMove.oldFile][pieceToMove.oldRank] = null;
    newBoard[pieceToMove.newFile][pieceToMove.newRank] = piece;
    return newBoard;
}
