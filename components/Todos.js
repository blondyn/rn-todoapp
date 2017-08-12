import React from 'react';
import {View} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class Todos extends React.Component {
    state = {
        todos: [],
    };

    render() {
        return (
            <View style={styles.container}>
                <TodoInput style={styles.searchInput}
                           onSubmit={this.onSubmit}
                />
                <TodoList todos={this.state.todos}/>
            </View>
        )
    }

    onSubmit = (value) => {
        this.setState((prev = {}) => {
            return {
                todos: [{text: value, done: false, key: new Date().toLocaleString()}, ...prev.todos]
            };
        });
    };

}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10
    }
};