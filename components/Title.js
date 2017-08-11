import React from 'react';
import {Text, View} from 'react-native';

export default () => (
    <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
    </View>
)

const styles = {
    container: {
        backgroundColor: 'rgb(151, 204, 232)',
        padding: 20,
        paddingTop: 30
    },
    title: {
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        textAlign: 'center'
    }
};