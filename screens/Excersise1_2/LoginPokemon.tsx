import React, { useState } from 'react';
import { Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Buoi2 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Alert.alert('Thông tin đăng nhập', `Username: ${username}\nPassword: ${password}`);
    };

    return (
        <ImageBackground
            source={require('../assets/images/background-pkm-go.jpg')}
            style={styles.background}
        >
            <View style={styles.content}>
                <Image
                    source={require('../assets/images/logo-pkm-go.jpg')}
                    style={styles.logo}/>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>REGISTER</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        placeholder="USERNAME"
                        placeholderTextColor="#000"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}/>
                    <TextInput
                        placeholder="PASSWORD"
                        placeholderTextColor="#000"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}/>

                    <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                        <Text style={{color: '#fff'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Buoi2;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 350,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 5,
    },
    registerContainer: {
        width: '85%',
        alignItems: 'flex-end',
    },
    registerText: {
        color: 'black',
        fontStyle: 'italic',
        fontSize: 14,
        textTransform: 'uppercase',
    },
    form: {
        width: '85%',
        backgroundColor: '#d4af37',
        padding: 16,
        borderRadius: 8,
    },
    input: {
        backgroundColor: '#d4af37',
        color: '#000',
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    loginBtn: {
        backgroundColor: '#B76E79',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
    },
});
