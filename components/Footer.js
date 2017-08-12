import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default (props) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.removeCompletedItems}>
            <Text style={styles.button}>Remove completed items</Text>
        </TouchableOpacity>
    </View>
)

const styles = {
    button: {
        color: 'red',
        textAlign: 'center',
        padding: 20,
    },
    container: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(226, 226, 226, 0.7)'
    }
};