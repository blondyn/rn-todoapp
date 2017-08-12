import React from 'react';
import {View} from 'react-native';
import SearchInput from './SearchInput';
import TodoList from './TodoList';

export default class Todos extends React.Component {
    state = {
        todos: [],
    };

    render() {
        return (
            <View style={styles.container}>
                <SearchInput style={styles.searchInput}
                             onSubmit={this.onSubmit}
                />
                <TodoList todos={this.state.todos}/>
            </View>
        )
    }

    onSubmit = (value) => {
        this.setState((prev = {}) => {
            return {
                todos: [{text: value, done: false}, ...prev.todos]
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