import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component';
import { fenToPieces } from './Piece';

import AbsolutePiecePosition from './PiecePositions';

import { connect } from 'react-redux';
import { changeBoard } from '../store/actions/board';
import { bindActionCreators } from 'redux';
import { ChessBoardSquare } from './ChessboardSquare';

export class ChessBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: createBoard(),
        };
    }

    render() {
        const state = this.state;

        return (
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 0, borderColor: '#c8e1ff' }}>
                    <Rows data={state.tableData} style={styles.board} />
                </Table>
                <AbsolutePiecePosition></AbsolutePiecePosition>
            </View>
        );
    }
}

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: { marginTop: 150, backgroundColor: '#fff' },
    text: { margin: 6, backgroundColor: 'red' },
    board: { width: screenWidth, height: screenWidth / 8 },
});

function createBoard() {
    const tab = [8];

    for (let file = 0; file < 8; file++) {
        tab[file] = [8];
        for (let rank = 0; rank < 8; rank++) {
            let squareId = (rank * 8 + file).toString();
            tab[file][rank] = <ChessBoardSquare squareId={squareId} />;
        }
    }

    return tab;
}

const mapStateToProps = (state) => ({
    board: state.board.board,
});

const ActionCreators = Object.assign({}, changeBoard);
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChessBoard);
