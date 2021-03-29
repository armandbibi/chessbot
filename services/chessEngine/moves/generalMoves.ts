function generateDiagonalyMove(x, y, maxDistance, board) {
    const legalMoves = [];
    const minX = x - maxDistance > 0 ? x - maxDistance : 0;
    const minY = y - maxDistance > 0 ? y - maxDistance : 0;

    const maxSize = board.length - 1;

    const maxX = x + maxDistance < maxSize ? x + maxDistance : maxSize;
    const maxY = y + maxDistance < maxSize ? y + maxDistance : maxSize;

    for (let i = 0; i < 8; i++) {
        // if (x - i >= 0 && y - i >= 0) console.log({ x: x - i, y: y - i });
        // console.log('---------');
        // if (x + i < 8 && y - i >= 0) console.log({ x: x + i, y: y - i });
        // console.log('---------');
        // if (x - i >= 0 && y + i < 8) console.log({ x: x - i, y: y + i });
        // console.log('---------');
        // if (x + i < 8 && y + i < 8) console.log({ x: x + i, y: y + i });
    }
}

function generateKingMoves(x, y, board) {
    //    return generateDiagonalyMove(x, y, 1, board)
}

function generatePawnsMoves() {
    return;
}

function generateKnigthMoves() {}

function generateBishopMoves(x, y, board) {
    return generateDiagonalyMove(x, y, 8, board);
}

function generateRookMoves() {}

function generateQueenMoves() {}
const None = { id: 0, generateMove: [] };

const King = { id: 1, generateMove: generateKingMoves };

const Pawn = { id: 2, generateMove: generatePawnsMoves };

const Knigth = { id: 3, generateMove: generateKnigthMoves };

const Bishop = { id: 4, generateMove: generateBishopMoves };

const Rook = { id: 5, generateMove: generateRookMoves };

const Queen = { id: 6, generateMove: generateQueenMoves };

export function getPieceShape(piece: number) {
    return piece & ~(black | white);
}

export function getPieceColor(piece) {
    return piece & (black | white);
}

export const white = 8;
export const black = 16;

export const pieces = {
    0: None,
    1: King,
    2: Pawn,
    3: Knigth,
    4: Bishop,
    5: Rook,
    6: Queen,
};
