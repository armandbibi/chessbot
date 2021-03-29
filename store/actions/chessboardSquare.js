import { CHESSBOARD_SQUARE_HIGHLIGHT } from '../constants';

export function highlightChessboardSquare(position) {
    return { type: CHESSBOARD_SQUARE_HIGHLIGHT, payload: position };
}
