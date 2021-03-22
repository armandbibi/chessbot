import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ChessBoard from '../components/ChessBoard';

export function ChessBoardHolder (){
    
        return (
            <View style={styles.chess}>
                <ChessBoard></ChessBoard>
            </View>   
        );
}

export const scanner = () => {
    return <Scanner></Scanner>}

const styles = StyleSheet.create({
    
    chess : {
    }

});