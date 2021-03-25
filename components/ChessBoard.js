import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Cell, Rows } from 'react-native-table-component';
import { ShapePiece, fenToPieces } from "./Piece.js"


const startingPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"

export default class ChessBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      piecePosition: fenToPieces(startingPosition), 
      tableData : createBoard()
    }

  }

  render() {
    
    const state = this.state;
    
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 0, borderColor: '#c8e1ff' }}>
          <Rows data={state.tableData} style={styles.board} />
        </Table>
        <AbsolutePiecePosition positions={state.piecePosition}></AbsolutePiecePosition>
      </View>
    )
  }
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: { marginTop: 150, backgroundColor: '#fff' },
  text: { margin: 0, backgroundColor: 'red' },
  case: { width: screenWidth / 8, height: screenWidth / 8 },
  blackCase: { backgroundColor: '#9F6E5A' },
  
  whiteCase: { backgroundColor: '#F0B8B8' },
  board: { width: screenWidth, height: screenWidth / 8 },

});


function createBoard(position) {

  const tab = [8];


  
    for (let file = 0; file < 8; file++) {
      tab[file] = [8];
      for (let rank = 0; rank < 8; rank++) {
        let color = ((file + rank) % 2 != 0) ? styles.blackCase : styles.whiteCase;
        tab[file][rank] = <View style={[styles.case, color]}></View>
      }
    }
  
    return tab;
}

class AbsolutePiecePosition extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      positions : props.positions
    }
  }

  

  render() {

    function handleRedraw(oldRank, oldFile, newRank, newFile) {

      // console.log("changing", oldRank, oldFile, newRank, newFile)
      const piece = positions[oldRank][oldFile];
      positions[oldRank][oldFile] = null;
      positions[newRank][newFile] = piece;
    }

    const positions = this.state.positions ?? [];
    

    return positions.reduce((res, file, fileIndex) => {
        file.forEach((piece, pieceIndex) => {
          if (piece) {
            const style = {
              tile: fileIndex,
              rank: pieceIndex
            };
            res.push(<ShapePiece placement={style} piece={piece} redraw={handleRedraw} />);
          }
        });
        return res;
        }, [])


  }
}