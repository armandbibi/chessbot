function generateDiagonalyMove(index, maxDistance, board) {
    const piece = board[index];
    const validPositions = [];

    for (let i = 0; i < maxDistance + 1; i++) {
        if (index + 9 * i < 64) validPositions.push(board[index + 9 * i]);

        if (index - 9 * i >= 0) validPositions.push(board[index - 9 * i]);

        if (index - 7 * i >= 0) validPositions.push(board[index - 7 * i]);

        if (index + 7 * i < 64) validPositions.push(board[index + 7 * i]);
    }

    return validPositions;
}

function generatelinearMove(index, maxDistance, board) {
    const piece = board[index];
    const validPositions = [];

    const rank = Math?.floor(index / 8);
    const file = index % 8;
    for (let i = 0; i < 8; i++) {
        validPositions.push(rank + i * 8);
        validPositions.push(file * 8 + i);
    }
    return validPositions;
}

function generateKingMoves(x, y, board) {
    //    return generateDiagonalyMove(x, y, 1, board)
}

function generatePawnsMoves() {
    return;
}

function generateKnigthMoves() {}

function generateBishopMoves(index, board) {
    return generateDiagonalyMove(index, 8, board);
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

export function getPieceShape(piece) {
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
