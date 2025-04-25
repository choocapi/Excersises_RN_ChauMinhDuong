import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant='displayLarge'>Details Screen</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})