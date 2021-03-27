
import { connect } from 'react-redux';
import { changeBoard } from '../../store/actions/board';
import { bindActionCreators } from 'redux';
import {getPieceColor, getPieceShape, white, pieces} from "../piece"

export function generateMoves(board) {

    const moves = [];

    board.forEach(function (file, x) {
        file.forEach(function (piece, y) {
            if (getPieceColor(piece) == white)
                getMoves(piece, x, y, board)
        });
    });
}


export function getMoves(piece, x, y, board) {

    const fn = pieces[getPieceShape(piece)];
    return fn?.generateMove(x, y, board);
}

const mapStateToProps = state => ({
    board: state.board,
  });
  
  const ActionCreators = Object.assign(
    {},
    changeBoard,
  );
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(generateMoves)
  