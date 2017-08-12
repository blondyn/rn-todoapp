import React from 'react';
import {TextInput} from 'react-native';

export default class SearchInput extends React.Component {
    state = {
        text: ''
    };

    render() {
        return (
            <TextInput value={this.state.text}
                       placeholder={'Enter an item!'}
                       onChangeText={this.onChangeText}
                       onEndEditing={this.onSubmitEditing}
            />)
    }

    onSubmitEditing = () => {
        const {onSubmit} = this.props;
        onSubmit(this.state.text);
        this.setState({text: ''});
    };

    onChangeText = (text) => {
        this.setState({text});
    };
}