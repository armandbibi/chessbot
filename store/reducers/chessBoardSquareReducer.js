import { Keyboard } from 'react-native';
import { CHESSBOARD_SQUARE_HIGHLIGHT } from '../constants';
import { CHESSBOARD_SQUARE_SELECTED } from '../constants';

const startingPosition = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

function setInitialPosition(startingPosition) {
    let file = 0;
    let rank = 0;
    let res = {};

    startingPosition.split('').forEach((char) => {
        if (char === '/') {
            rank = 0;
            file++;
        } else if (char !== '8') {
            res[rank++ * 8 + file] = { piece: pieceToNumber[char] };
        }
    });
    // console.log(res);
    return res;
}

const pieceToNumber = {
    q: 22,
    r: 21,
    b: 20,
    n: 19,
    p: 18,
    k: 17,
    Q: 14,
    R: 13,
    B: 12,
    N: 11,
    P: 10,
    K: 9,
};

const initialState = {
    squares: setInitialPosition(startingPosition),
};

const chessboardSquareReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHESSBOARD_SQUARE_HIGHLIGHT: {
            const { squareIds } = action;
            if (squareIds) {
                squareIds.forEach((id) => {
                    if (!state.squares[id]) {
                        state.squares[id] = { isHighlighted: true };
                    }
                });
                // console.log(squareIds);
                state.squares = Object.entries(state.squares).reduce((res, acc) => {
                    const [squareIndex, squareData] = acc;
                    // console.log(squareIndex, squareIds.includes(squareIndex));
                    res[squareIndex] = { ...squareData, isHighlighted: squareIds.includes(squareIndex) };
                    // console.log(res[squareIndex]);
                    return res;
                }, {});
            }
            return state;
        }
        case CHESSBOARD_SQUARE_SELECTED: {
            const { squareIds } = action;

            squareIds.forEach((squareId) => {
                if (!state.squares[squareId]) {
                    state.squares[squareId] = { isSelected: true };
                }
            });
            state.squares = Object.entries(state.squares).reduce((res, [squareIndex, squareData]) => {
                res[squareIndex] = { ...squareData, isSelected: squareIds.includes(squareIndex) };
                // console.log(res[squareIndex]);
                return res;
            }, {});
            return state;
        }
        default: {
            return state;
        }
    }
};

export default chessboardSquareReducer;
