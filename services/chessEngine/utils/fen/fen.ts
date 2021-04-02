const None = 0;
const King = 1;
const Pawn = 2;
const Knigth = 3;
const Bishop = 4;
const Rook = 5;
const Queen = 6;

export const white = 8;
export const black = 16;

const fenValues = {
    k: King,
    p: Pawn,
    n: Knigth,
    b: Bishop,
    r: Rook,
    q: Queen,
};

export const fenToPieces: (fenString: String) => number[] = function (fenString: String) {
    let file = 0;
    let rank = 0;

    let pieceShapes = Array.from(Array(64).fill(null));
    fenString.split('').forEach((char) => {
        if (char === '/') {
            file = 0;
            rank++;
        } else {
            if (isNaN(parseInt(char))) {
                let color = char.toUpperCase() == char ? white : black;
                let piece = fenValues[char.toLowerCase()];
                pieceShapes[file++ * 8 + rank] = piece | color;
            } else {
                file += parseInt(char);
            }
        }
    });
    return pieceShapes;
};
