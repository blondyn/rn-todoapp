import React from 'react';
import {FlatList} from 'react-native';
import ListRow from './ListRow';

export default (props) => {
    return (
        <FlatList
            data={props.todos}
            renderItem={({item}) => <ListRow item={item} />}
            style={styles.container}
        />
    )
}

const styles = {
    container: {
        marginTop: 20
    }
};