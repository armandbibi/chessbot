import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component';
import ShapePiece from "./Piece"

import { connect } from 'react-redux';
import { changeBoard } from '../store/actions/board';
import { bindActionCreators } from 'redux';

const startingPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"

const testMovePosition = "8/8/3q4/3bb3/4k2k/8/8/8"


class AbsolutePiecePosition extends Component {

    turn = 0;
    render() {

        this.turn++;
        let positions = this.props.board;
        absolutePieces = []
        return positions.reduce((res, file, fileIndex) => {
        file.forEach((piece, pieceIndex) => {
          if (piece) {
            const style = {
              tile: fileIndex,
              rank: pieceIndex
            };
            res.push(<ShapePiece placement={style} piece={piece} key={fileIndex + "" +pieceIndex + "" + piece}/>);
          }
        });
        return res;
        }, [])

    }
}

const mapStateToProps = state => ({
    board: state.board.board
});

const ActionCreators = Object.assign(
    {},
    changeBoard,
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(AbsolutePiecePosition)