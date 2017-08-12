import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class CheckButton extends React.Component {
    state = {
        checked: false
    }

    render() {
        const style = this.state.checked ? [styles.checkBox, styles.checked] : [styles.checkBox];
        return (<TouchableOpacity onPress={this.onPress}><Text style={style}></Text></TouchableOpacity>)
    }

    onPress = () => this.setState((prev) => ({checked: !prev.checked}))
}


const styles = {
    checkBox: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        width: 16,
        height: 16,
    },
    checked: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
};