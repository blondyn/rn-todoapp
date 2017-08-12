import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default () => <View><TouchableOpacity><Text style={styles.removeButton}>x</Text></TouchableOpacity></View>

const styles = {
    removeButton: {
        color: 'rgba(255, 0, 0, 0.7)',
        fontSize: 20
    }
};