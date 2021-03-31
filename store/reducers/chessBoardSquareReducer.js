import { CHESSBOARD_SQUARE_HIGHLIGHT } from '../constants';

const initialState = {};

const chessboardSquareReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHESSBOARD_SQUARE_HIGHLIGHT: {
            const { squareId } = action;

            if (!state[squareId]) {
                state[squareId] = { isHighlighted: true };
            }
            state = Object.entries(state).reduce((res, [squareIndex, squareData]) => {
                res[squareIndex] = { ...squareData, isHighlighted: squareId === squareIndex ? true : false };

                return res;
            }, {});
            return state;
        }
        default: {
            return state;
        }
    }
};

function highlightSquares(squares, { squareId }) {
    // const
}

export default chessboardSquareReducer;
