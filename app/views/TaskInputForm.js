import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import { Actions } from '../services/Actions';

export class TaskInputForm extends React.Component {
    state = {
        title: '',
        description: ''
    };

    titleChange(title) {
        this.setState({title: title});
    }

    descriptionChange(description) {
        this.setState({description: description})
    }

    saveTask() {
        this.props.dispatch(Actions.saveTask(this.state));
        this.setState({ title: '', description: '' });
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>
                    Create new task
                </Text>
                <Text style={styles.label}>
                    Title
                </Text>
                <TextInput 
                style={styles.input} 
                onChangeText={this.titleChange.bind(this)}
                />
                <Text style={styles.label}>
                    Description
                </Text>
                <TextInput 
                style={styles.input} 
                onChangeText={this.descriptionChange.bind(this)} 
                multiline={true}
                />
                <View style={styles.button}>
                    <Button
                        onPress={this.saveTask.bind(this)}
                        title='Save'
                        color='lightblue'
                    />
                </View>
            </View>
        );
    }
}

const ConnectedTaskInputForm = connect()(TaskInputForm);

export default ConnectedTaskInputForm;

const styles = StyleSheet.create({
    title: {
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        margin: 10
    },
    input: {
        height: 40,
        margin: 10
    },
    button: {
        margin: 10
    }
});
