import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

const Cat = (props: any) => {
    const [isHungry, setIsHungry] = React.useState(true)

    return (
        <View style={styles.element}>
            <Text style={styles.text}>
                I am {props.name} and I am {isHungry ? 'hungry' : 'full'}
            </Text>
            <TouchableOpacity
                onPress={() => setIsHungry(false)}
                disabled={!isHungry}
                style={styles.button}>
                <Text style={{color: 'white'}}>{isHungry ? 'Pour me some milk, please!' : 'Thank you!'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Cafe = () => {
    return (
        <View style={styles.container}>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
            <Text style={styles.footer}>Châu Minh Đương - 2124802010036</Text>
        </View>
    )
}

export default Cafe
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    element: {
        marginBottom: 20,
        padding: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
    },
    footer: {
        fontSize: 16,
        color: 'black',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    }
})
