import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
requestAnimationFrame('dotenv').config();

const EQ = ({ navigation }) => {
    const [question, setQuestion] = useState('');
    const [stance, setStance] = useState('');
    
    const submitQuestion = async (question, stance) => {
        console.log("API Key:", process.env.ethikey);
        try {
            const prompt = createPrompt(question, stance);
            const messages = [{ role: 'system', content: prompt }];
    
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${process.env.ethikey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: messages,
                    model: 'gpt-4',
                    max_tokens: 100,
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
                return `Your response should only be 2 Sentences and Short. Arguments supporting: ${question}`;
            case 'against':
                return `Your response should only be 2 Sentences and Short. Arguments opposing: ${question}`;
            case 'neutral':
                return `Your response should only be 2 Sentences and Short. Neutral analysis of: ${question}`;
            default:
                return `Your response should only be 2 Sentences and Short. Discuss the statement: ${question}`;
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.boldText}>Ask me an ethical question:</Text>
                    <TextInput
                        placeholder='Enter question here'
                        style={styles.largeInput}
                        multiline={true}
                        value={question}
                        onChangeText={setQuestion}
                    />
                </View>
                <Text style={styles.boldText}>Choose the type of response you would like:</Text>
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
    boldText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    container: {
        flex: 1,
        padding: 30
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
        width: '100%',
        marginTop: 10,
        marginBottom: 50,
        borderWidth: 2,
        padding: 10,
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        height: 40,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallButton: {
        backgroundColor: 'black',
        width: '30%',
        height: 40,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
});

export default EQ;
