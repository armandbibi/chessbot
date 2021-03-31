import { CHESSBOARD_SQUARE_HIGHLIGHT } from '../constants';

export function highlightChessboardSquare(squareId) {
    return { type: CHESSBOARD_SQUARE_HIGHLIGHT, squareId: squareId };
}
