import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text variant='displayLarge'>Home Screen</Text>
      <Button mode='contained' onPress={() => navigation.navigate('Details')}>Go to Details</Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})