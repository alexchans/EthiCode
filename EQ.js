import { View, ScrollView, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EQ = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Ask me an ethical question:</Text>
                    <TextInput placeholder='Enter question here' style={styles.largeInput}
                        multiline={true}
                    />
                </View>
                <Text>Choose the type of response you would like:</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.smallButton}>
                        <Text style={{ color: 'white' }}>For</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallButton}>
                        <Text style={{ color: 'white' }}>Against</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallButton}>
                        <Text style={{ color: 'white' }}>Neutral</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result")}>
                    <Text style={{ color: 'white' }}>Submit</Text>
                </TouchableOpacity>
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
    largeInput: {
        height: 230,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
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
    },
    smallButton: {
        backgroundColor: 'black',
        width: '28%',
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
});

export default EQ;
