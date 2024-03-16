import { View, ScrollView, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Result = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Your result:</Text>
                    <TextInput placeholder='AI response...' style={styles.largeInput}
                        multiline={true}
                    />
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

export default Result;
