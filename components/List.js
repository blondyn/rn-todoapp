import React from 'react';
import {View} from 'react-native';
import SearchInput from './SearchInput';
import TodoList from './TodoList';

export default class List extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SearchInput style={styles.searchInput}/>
                <TodoList />
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