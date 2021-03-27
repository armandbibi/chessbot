import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    case: { width: screenWidth / 8, height: screenWidth / 8 },
    black: { backgroundColor: '#9F6E5A' },
    white: { backgroundColor: '#F0B8B8' },
    highlighted: { backgroundColor: '#ff0000' },
});

type Props = {
    color: string;
};

export function ChessBoardSquare({ color }: Props) {
    // const isHighlited = useSelector((state) => getIsHighligtedSquare(state, {x, y}))

    return <View style={[styles.case, styles[color]]} />;
}
