import { CHESSBOARD_SQUARE_HIGHLIGHT } from '../constants';

const initialState = {
    isHighlighted: false,
};

const chessboardSquareReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHESSBOARD_SQUARE_HIGHLIGHT: {
            state = {
                ...state,
                isHighlighted: true,
            };
            return state;
        }
        default: {
            return state;
        }
    }
};

export default chessboardSquareReducer;
