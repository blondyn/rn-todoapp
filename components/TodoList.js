import React from 'react';
import {FlatList, Text} from 'react-native';


export default class List extends React.Component {
    render() {
        return (
            <FlatList
                data={this.props.todos}
                renderItem={this.renderItem}
                style={styles.container}
            />
        )
    }

    renderItem = ({item}) => (<Text>{item.text}</Text>)
}

const styles = {
    container: {
        marginTop: 20
    },
};