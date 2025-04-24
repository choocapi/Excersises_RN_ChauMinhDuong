import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, HelperText, TextInput } from 'react-native-paper'

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgHelperEmail, setMsgHelperEmail] = useState('');
  const [msgHelperPassword, setMsgHelperPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length == 0) {
      setMsgHelperEmail('Email is required');
      return true;
    }
    else if (!emailRegex.test(email)) {
      setMsgHelperEmail('Email is invalid');
      return true;
    }
    else {
      setMsgHelperEmail('');
      return false;
    }
  }

  const validatePassword = (password: string) => {
    if (password.length == 0) {
      setMsgHelperPassword('Password is required');
      return true;
    }
    else if (password.length < 8) {
      setMsgHelperPassword('Password must be at least 8 characters long');
      return true;
    }
    else {
      setMsgHelperPassword('');
      return false;
    }
  }

  const handleLogin = () => {
    const isEmailError = validateEmail(email);
    const isPasswordError = validatePassword(password);
    setEmailError(isEmailError);
    setPasswordError(isPasswordError);
    if (!isEmailError && !isPasswordError) {
      Alert.alert('Login info', `Email: ${email}\nPassword: ${password}`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/flame-icon.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome back!</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Enter email'
          left={<TextInput.Icon icon='email-outline' />}
          mode='outlined'
          value={email}
          onChangeText={(email) => {
            setEmail(email);
            setEmailError(validateEmail(email));
          }}
          keyboardType='email-address'
          autoCapitalize='none'
          theme={{
            colors: {
              primary: 'gray',
            },
          }}
        />
        <HelperText type='error' visible={emailError} >
          {msgHelperEmail}
        </HelperText>
        <TextInput
          placeholder='Enter password'
          left={<TextInput.Icon icon='lock-outline' />}
          right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />}
          mode='outlined'
          value={password}
          onChangeText={(password) => {
            setPassword(password);
            setPasswordError(validatePassword(password));
          }}
          secureTextEntry={!showPassword}
          theme={{
            colors: {
              primary: 'gray',
            },
          }}
        />
        <HelperText type='error' visible={passwordError} >
          {msgHelperPassword}
        </HelperText>
        <Button mode='contained' onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </View>
      <View style={styles.linkContainer}>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Create a new account?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
  },
  formContainer: {
    marginTop: 32,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: '#FF803E',
    paddingVertical: 6,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  linkButton: {
    marginBottom: 8,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
})