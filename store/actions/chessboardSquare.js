import { CHESSBOARD_SQUARE_HIGHLIGHT } from '../constants';
import { CHESSBOARD_SQUARE_SELECTED } from '../constants';

export function highlightChessboardSquare(squareIds) {
    return { type: CHESSBOARD_SQUARE_HIGHLIGHT, squareIds: squareIds };
}

export function selectChessboardSquare(squareIds) {
    return { type: CHESSBOARD_SQUARE_SELECTED, squareIds: squareIds };
}
