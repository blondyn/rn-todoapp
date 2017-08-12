import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Title from './Title';
import Todos from './Todos';
import Footer from './Footer';

export default class todoApp extends Component {
    state = {
        todos: [],
    };

    render() {
        return (
            <View style={styles.container}>
                <Title/>
                <Todos style={styles.list}
                       todos={this.state.todos}
                       onSubmit={this.onSubmit}
                       checkboxPressed={this.checkboxPressed}
                       removeItem={this.removeItem}/>
                <Footer removeCompletedItems={this.removeCompletedItems}/>
            </View>
        );
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
        this.setState({todos: newTodosState});
    };

    removeItem = ({key}) => {
        const todos = this.state.todos.filter(todo => todo.key !== key);
        this.setState({todos});
    };

    removeCompletedItems = () => {
        const todos = this.state.todos.filter(todo => !todo.done);
        this.setState({todos});
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    }
}