import { View, ScrollView, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
const logo = require("./assets/logo.png")

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row" }}>
                    <Image source={logo} />
                    <View style={{ paddingLeft: "27%" }}>
                        <Button title='About Us' onPress={() => navigation.navigate("About Us")} />
                    </View>
                </View>
                <View>
                    <Text>Log in</Text>
                    <TextInput placeholder='Username' style={styles.input} />
                    <TextInput placeholder='Password' style={styles.input} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white' }}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Forgot Password</Text>
                    <TextInput placeholder='Username' style={styles.input} />
                    <TextInput placeholder='New Password' style={styles.input} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Sign In</Text>
                    <TextInput placeholder='Preferred Username' style={styles.input} />
                    <TextInput placeholder='Password' style={styles.input} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    input: {
        height: 40,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: 'black',
        width: '80%',
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default Home;
