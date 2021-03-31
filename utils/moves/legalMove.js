import { connect } from 'react-redux';
import { changeBoard } from '../../store/actions/board';
import { bindActionCreators } from 'redux';
import { getPieceColor, getPieceShape, white, pieces } from '../piece';

export function generateMoves(board) {
    const moves = [];

    board.forEach(function (piece, index) {
        if (getPieceColor(piece) == white) getMoves(index, board);
    });
}

export function getMoves(index, board) {
    const fn = pieces[getPieceShape(getPieceShape(board[index]))];
    return fn?.generateMove(index, board);
}

const mapStateToProps = (state) => ({
    board: state.board,
});

const ActionCreators = Object.assign({}, changeBoard);
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(generateMoves);
