import React from 'react';
import {View} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class Todos extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TodoInput style={styles.searchInput}
                           onSubmit={this.props.onSubmit}
                />
                <TodoList todos={this.props.todos}
                          checkboxPressed={this.props.checkboxPressed}
                          removeItem={this.props.removeItem}
                />
            </View>
        )
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