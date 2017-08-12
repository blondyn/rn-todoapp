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
                <TodoList todos={this.state.todos} checkboxPressed={this.checkboxPressed}/>
            </View>
        )
    }

    onSubmit = (value) => {
        this.setState((prev = {}) => {
            return {
                todos: [{text: value, done: false, key: Date.now()}, ...prev.todos]
            };
        });
    };

    checkboxPressed = ({key, checked}) => {
        const newTodosState = this.state.todos.map((todo) => {
            if (todo.key === key) {
                return Object.assign({}, todo, {done: checked})
            }
            return todo;
        });
        this.setState({todos: newTodosState})
    }

}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10
    }
};