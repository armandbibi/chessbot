import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ChessBoard from '../components/ChessBoard';

export function ChessBoardHolder (){
    
        return (
            <View>
                <ChessBoard></ChessBoard>
            </View>   
        );
}