import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component';
import ShapePiece from "./Piece.js"

import { connect } from 'react-redux';
import { changeBoard } from '../store/actions/board';
import { bindActionCreators } from 'redux';

const startingPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"



class AbsolutePiecePosition extends Component {

    turn = 0;
    render() {

        this.turn++;
        let positions = this.props.board;
        absolutePieces = []
        if (positions != null) {

            for (let rank = 0; rank < positions.length; rank++) {
                let file = positions[rank];
                for (let tile = 0; tile < file.length; tile++) {


                    let piece = positions[rank][tile]
                    if (piece != null) {

                        let style = {
                            tile: rank,
                            rank: tile
                        }
                        let piecePlace = <ShapePiece key={tile +" " +  rank + " " + piece} placement={style} piece={positions[rank][tile]}></ShapePiece>
                        absolutePieces.push(piecePlace)
                    }
                }
            }
        }
        return absolutePieces;
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