import { pieces, getPieceShape } from './moves/generalMoves';

import { fenToPieces } from './utils/fen/fen';
export { fenToPieces } from './utils/fen/fen';

export default class ChessEngine {
    board: number[];

    initBoard(fern: String) {
        this.board = fenToPieces(fern);
    }

    getLegalMove(position: { x: number; y: number }) {
        let pieceShape = getPieceShape(this.board[position.x][position.y]);

        return pieces[pieceShape].generateMove();
    }

    static fenToPieces(fern: String) {
        return fenToPieces(fern);
    }
}
