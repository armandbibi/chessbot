import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { StyleSheet, View, Dimensions, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { highlightChessboardSquare } from '../store/actions/chessboardSquare';
import { getChessboardSquare } from '../store/selectors/chessboardSquare';
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    case: { width: screenWidth / 8, height: screenWidth / 8 },
    black: { backgroundColor: '#9F6E5A' },
    white: { backgroundColor: '#F0B8B8' },
    highlightedBlack: { backgroundColor: '#C24639' },
    highlightedWhite: { backgroundColor: '#F76464' },
});

type Props = {
    squareId: string;
    // board:
};

export function ChessBoardSquare({ squareId }: Props) {
    const dispatch = useDispatch();
    const squareData = useSelector((state) => getChessboardSquare(state, squareId));

    function handleIsHighlighted() {
        dispatch(highlightChessboardSquare([squareId]));
    }

    const rank = Math.floor(Number(squareId) / 8);
    const file = Number(squareId) % 8;
    // console.log('rank et file', rank, file);
    let color = (file + rank) % 2 !== 0 ? 'black' : 'white';
    console.log(squareData);

    if (squareData?.isHighlighted) {
        color = (file + rank) % 2 !== 0 ? 'highlightedBlack' : 'highlightedWhite';
    }

    return (
        <View style={[styles.case, styles[color]]}>
            <Button onPress={handleIsHighlighted} title="" />
        </View>
    );
}

export default ChessBoardSquare;
