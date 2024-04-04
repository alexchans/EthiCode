import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const handleLogin = async (username, password, navigation) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/api/login`, {
            username,
            password
        });
        console.log('Login successful:', response.data);
        navigation.navigate("Ethical Question");
        // Navigate or save login state as needed
    } catch (error) {
        console.error('Login error:', error);
    }
};

const handleUpdatePassword = async (username, newPassword) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/api/update`, {
            username,
            password: newPassword
        });
        console.log('Password updated:', response.data);
        // Handle the response, possibly navigate or show a success message
    } catch (error) {
        console.error('Update password error:', error);
    }
};

const handleSignIn = async (username, password, navigation) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/api/signin`, {
            username,
            password
        });
        console.log('Account created:', response.data);
        navigation.navigate("Ethical Question");
        // Navigate or save login state as needed
    } catch (error) {
        console.error('Sign in error:', error);
    }
};

const logo = require("./assets/logo.png");

const Home = ({ navigation }) => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [updateUsername, setUpdateUsername] = useState('');
    const [updatePassword, setUpdatePassword] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row" }}>
                    <Image source={logo} style={{width: 100, paddingBottom: 0}}/>
                    <View style={{ paddingLeft: "47%"}}>
                        <TouchableOpacity onPress={() => navigation.navigate("About Us")}>
                            <Text>About Us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.boldText}>Log in</Text>
                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                        value={loginUsername}
                        onChangeText={setLoginUsername}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.input}
                        value={loginPassword}
                        onChangeText={setLoginPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleLogin(loginUsername, loginPassword, navigation)}
                    >
                        <Text style={{ color: 'white' }}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.boldText}>Forgot Password</Text>
                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                        value={updateUsername}
                        onChangeText={setUpdateUsername}
                    />
                    <TextInput
                        placeholder='New Password'
                        style={styles.input}
                        value={updatePassword}
                        onChangeText={setUpdatePassword}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleUpdatePassword(updateUsername, updatePassword)}
                    >
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.boldText}>Sign In</Text>
                    <TextInput
                        placeholder='Preferred Username'
                        style={styles.input}
                        value={newUsername}
                        onChangeText={setNewUsername}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.input}
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleSignIn(newUsername, newPassword, navigation)}
                    >
                        <Text style={{ color: 'white' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    container: {
        flex: 1,
        padding: 30
    },
    input: {
        height: 40,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Home;
