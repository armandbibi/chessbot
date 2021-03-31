import React, { Component } from 'react';
import ShapePiece from './Piece';

import { connect } from 'react-redux';
import { changeBoard } from '../store/actions/board';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';

const startingPosition = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

const testMovePosition = '8/8/3q4/3bb3/4k2k/8/8/8';

function AbsolutePiecePosition({ board }) {
    return board.reduce((res, element, index) => {
        const piece = mapArrayOfPIeceToPositionsOnScreens(element, index);
        if (piece) res.push(piece);
        return res;
    }, []);
}

function mapArrayOfPIeceToPositionsOnScreens(element, index) {
    if (element) {
        const placement = {
            tile: Math.floor(index / 8),
            rank: index % 8,
        };
        return <ShapePiece placement={placement} piece={element} key={index} />;
    }
    return null;
}

const mapStateToProps = (state) => ({
    board: state.board.board,
});

const ActionCreators = Object.assign({}, changeBoard);
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AbsolutePiecePosition);
