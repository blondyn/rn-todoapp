import React from 'react';
import {View} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

export default class Todos extends React.Component {
    render() {
        const {onSubmit, todos, checkboxPressed, removeItem} = this.props;
        return (
            <View style={styles.container}>
                <TodoInput style={styles.searchInput}
                           onSubmit={onSubmit}
                />
                <TodoList todos={todos}
                          checkboxPressed={checkboxPressed}
                          removeItem={removeItem}
                />
            </View>
        )
    }
}

Todos.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    checkboxPressed: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.object,
        done: PropTypes.bool,
        key: PropTypes.number
    })),
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10
    }
};