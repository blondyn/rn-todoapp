import React from 'react';
import {FlatList, Text} from 'react-native';


export default class List extends React.Component {
    render() {
        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
            style={styles.container}/>
        )
    }

    renderItem({item}) {
        return (<Text>{item.text}</Text>)
    }
}

const data = [{text: 'first'}, {text: 'second'}];

const styles = {
    container: {
        marginTop: 20
    },
}