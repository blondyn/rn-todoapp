import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class CheckButton extends React.Component {
    state = {
        checked: false
    };

    render() {
        const style = this.state.checked ? [styles.checkBox, styles.checked] : [styles.checkBox];
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={style}/>
            </TouchableOpacity>)
    }

    onPress = (v) => this.setState((prev) => {
        const {checkboxPressed, item} = this.props;
        checkboxPressed({key: item.key, checked: !prev.checked});
        return {checked: !prev.checked};
    })
}

CheckButton.propTypes = {
  item: PropTypes.object.isRequired,
  checkboxPressed: PropTypes.func.isRequired
};


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

export default CheckButton;