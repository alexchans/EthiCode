import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
const AlexChen = require("./assets/AlexChen.png");
const EricLong = require("./assets/EricLong.jpg");
const WilliamCooper = require("./assets/WilliamCooper.jpg");

const AboutUs = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.profileRow}>
                    <Image source={AlexChen} style={styles.image} />
                    <View style={{ flex: 1 }}>
                        <Text>Alex Chen</Text>
                        <Text style={{ marginTop: 5 }}>Beijing, China</Text>
                        <Text style={{ marginTop: 5 }}>Computer Science B.S., Software Engineering Track at Southern Methodist University</Text>
                        <Text style={{ marginTop: 5 }}>TA for Discrete Computational Structures Since August 2023</Text>
                    </View>
                </View>
                <View style={styles.profileRow}>
                    <Image source={EricLong} style={styles.image} />
                    <View style={{ flex: 1 }}>
                        <Text>Eric Long</Text>
                        <Text style={{ marginTop: 5 }}>Little Elm, TX</Text>
                        <Text style={{ marginTop: 5 }}>B.S. Computer Science and Data Science</Text>
                        <Text style={{ marginTop: 5 }}>Tennis enthusiast</Text>
                        <Text style={{ marginTop: 5 }}>English is my third language</Text>
                    </View>
                </View>
                <View style={styles.profileRow}>
                    <Image source={WilliamCooper} style={styles.image} />
                    <View style={{ flex: 1 }}>
                        <Text>William Cooper</Text>
                        <Text style={{ marginTop: 5 }}>Dallas, Texas</Text>
                        <Text style={{ marginTop: 5 }}>Computer Science</Text>
                        <Text style={{ marginTop: 5 }}>Likes to game</Text>
                        <Text style={{ marginTop: 5 }}>Has Dog Named Olive</Text>
                        <Text style={{ marginTop: 5 }}>Has been verified in Data Analysis through Excel</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    profileRow: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    image: {
        height: 150,
        width: 150,
        marginRight: 20
    }
});

export default AboutUs;
