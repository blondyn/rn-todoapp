import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Title from './Title';
import List from './List';
import Footer from './Footer';

export default class todoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Title />
                <List style={styles.list} />
                <Footer />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    }
}