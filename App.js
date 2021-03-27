import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { ChessBoardHolder } from './screens/ChessBoardHolder.js'

export default function App() {
  return (
    <View style={styles.container}>
      <ChessBoardHolder></ChessBoardHolder>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: '#111111',
  },
})
