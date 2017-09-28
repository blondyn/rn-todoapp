import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import Title from './Title';
import store from '../state/store';
import VisibleTodos from '../containers/VisibleTodos';
import ConnectedFooter from '../containers/ConnectedFooter';

export default (props) => (
    <Provider store={store}>
        <View style={styles.container}>
            <Title/>
            <VisibleTodos style={styles.list}/>
            <ConnectedFooter/>
        </View>
    </Provider>
);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    }
}