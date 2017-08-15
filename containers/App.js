import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Title from '../components/Title';
import Todos from '../components/Todos';
import Footer from '../components/Footer';
import store from '../state/store';
import {
    ADD_ITEM,
    REMOVE_ITEM,
    MARK_ITEM,
    REMOVE_COMPLETED_ITEMS
} from '../state/types';

export default class todoApp extends Component {
    state = {
        todos: [],
    };

    render() {
        return (
            <View style={styles.container}>
                <Title/>
                <Todos style={styles.list}
                       todos={store.getState()}
                       onSubmit={this.onSubmit}
                       checkboxPressed={this.checkboxPressed}
                       removeItem={this.removeItem}
                       store={store}/>
                <Footer removeCompletedItems={this.removeCompletedItems}/>
            </View>
        );
    }

    onSubmit = (value) => {
        store.dispatch({type: ADD_ITEM, payload: value})
        this.setState(store.getState())
    };

    checkboxPressed = ({key, checked}) => {
        store.dispatch({type: MARK_ITEM, payload: {key, checked}})
        this.setState(store.getState());
    };

    removeItem = ({key}) => {
        store.dispatch({type: REMOVE_ITEM, payload: key});
        this.setState(store.getState());
    };

    removeCompletedItems = () => {
        store.dispatch({type: REMOVE_COMPLETED_ITEMS});
        this.setState(store.getState());
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    }
}