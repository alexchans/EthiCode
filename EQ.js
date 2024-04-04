import Config from 'react-native-config';
import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EQ = ({ navigation }) => {
    const [question, setQuestion] = useState('');
    const [stance, setStance] = useState('');
    
    const submitQuestion = async (question, stance) => {
        console.log("API Key:", Config.ethicodekey);
        try {
            const prompt = createPrompt(question, stance);
            const messages = [{ role: 'system', content: prompt }];
    
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${Config.ethicodekey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: messages,
                    model: 'gpt-4',
                })
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const responseData = await response.json();
            navigation.navigate("Result", { aiResponse: responseData.choices[0].message.content });
        } catch (error) {
            console.error('Error submitting question:', error);
            // Handle error (e.g., show an error message)
        }
    };
    
    const createPrompt = (question, stance) => {
        // Customize the prompt based on the stance
        switch (stance) {
            case 'for':
                return `Arguments supporting: ${question}`;
            case 'against':
                return `Arguments opposing: ${question}`;
            case 'neutral':
                return `Neutral analysis of: ${question}`;
            default:
                return `Discuss the statement: ${question}`;
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Ask me an ethical question:</Text>
                    <TextInput placeholder='Enter question here' style={styles.largeInput}
                        multiline={true}
                        value={question}
                        onChangeText={setQuestion}
                    />
                </View>
                <Text>Choose the type of response you would like:</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.smallButton} onPress={() => setStance('for')}>
                        <Text style={{ color: 'white' }}>For</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallButton} onPress={() => setStance('against')}>
                        <Text style={{ color: 'white' }}>Against</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallButton} onPress={() => setStance('neutral')}>
                        <Text style={{ color: 'white' }}>Neutral</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => {
                        // Replace this with your API call logic
                        submitQuestion(question, stance);
                        navigation.navigate("Result");
                    }}
                >
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
