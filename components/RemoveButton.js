import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class RemoveButton extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.removeItem}>
                    <Text style={styles.removeButton}>x</Text>
                </TouchableOpacity>
            </View>
        )
    }

    removeItem = () => {
        const {removeItem, item} = this.props;
        removeItem({key: item.key})
    }
}

RemoveButton.propTypes = {
    removeItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};
const styles = {
    removeButton: {
        color: 'rgba(255, 0, 0, 0.7)',
        fontSize: 20
    }
};