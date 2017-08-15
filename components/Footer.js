import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'

const Footer = (props) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.removeCompletedItems}>
            <Text style={styles.button}>Remove completed items</Text>
        </TouchableOpacity>
    </View>
);

Footer.propTypes = {
    removeCompletedItems: PropTypes.func.isRequired
}

const styles = {
    button: {
        color: 'red',
        textAlign: 'center',
        padding: 20,
    },
    container: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(226, 226, 226, 0.7)'
    }
};

export default Footer;