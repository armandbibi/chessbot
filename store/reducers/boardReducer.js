import { BOARD_CHANGE } from "../constants"
import { fenToPieces } from "../../components/Piece"

const startingPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
const secondPosition = "rnbqkbnr/PPPPPPPP/8/8/8/8/pppppppp/RNBQKBNR"


const initialState = {
    board: fenToPieces(startingPosition)
}


const boardReducer = (state = initialState, action) => {

    switch (action.type) {
        case BOARD_CHANGE:
            {
                console.log("0000  ", action.payload)   

                console.log("old state", state)
               state = {...state, board: movePiece(state.board, {payload : action.payload})} 
               console.log("new state", state)
               return state
            }
            
        default:
            {
                return state;
            }
    }
}
export default boardReducer;

function movePiece(board, {payload}) {


    const pieceToMove = payload.payload
    const newBoard = [...board];
    let piece = newBoard[pieceToMove.oldRank][pieceToMove.oldFile];
    newBoard[pieceToMove.oldRank][pieceToMove.oldFile] = null;
    newBoard[pieceToMove.newFile][pieceToMove.newRank] = piece;
    return newBoard
}