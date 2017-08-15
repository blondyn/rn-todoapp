import React from 'react';
import {Text, View} from 'react-native';
import CheckButton from './CheckButton';
import RemoveButton from './RemoveButton';
import PropTypes from 'prop-types';

const ListRow =  (props) => {
    return (<View style={styles.container}>
        <Text style={styles.cell}>{props.item.text}</Text>
        <View style={styles.toolbar}>
            <CheckButton item={props.item} checkboxPressed={props.checkboxPressed}/>
            <RemoveButton item={props.item} removeItem={props.removeItem}/>
        </View>
    </View>)
};

ListRow.propTypes = {
    item: PropTypes.object,
    checkboxPressed: PropTypes.func,
    removeItem: PropTypes.func
};

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 10
    },
    cell: {
        fontSize: 20,
        flex: 0.8
    },
    toolbar: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
};

export default ListRow;