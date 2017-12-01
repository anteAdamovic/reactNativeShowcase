import React from 'react';
import { connect } from 'react-redux';  
import { bindActionCreators } from 'redux';
import {View, StyleSheet, Text, StatusBar, Button} from 'react-native';
import {TaskModelList} from './TaskModelList';

import { Actions } from '../services/Actions';
import { TaskModel } from '../models/TaskModel';

class TasksOverview extends React.Component {

    props = {
        refreshTasks: () => {},
        tasks: []
    };

    componentDidMount() {
        this.props.refreshTasks();
    }

    render() {
        if (this.props.shouldRefreshTasks) {
            this.props.refreshTasks();
        }
        return (
            <View>
                <StatusBar hidden={true}/>
                <View style={styles.buttonRefresh}>
                    <Button onPress={this.props.refreshTasks.bind(this)} title='refresh' color='lightgreen'/>
                </View>
                <View style={styles.buttonAdd}>
                    <Button onPress={this.props.addTask.bind(this)} title='Add Task' color='lightblue'/>
                </View>
                <TaskModelList tasks={this.props.tasks}/>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    let shouldRefreshTasks = false;

    if (state.RefreshTasksReducer && state.RefreshTasksReducer.tasks && props.route.tasks.length === 0) {
        props.route.tasks = state.RefreshTasksReducer.tasks;
    }

    if (state.SaveTaskReducer && state.SaveTaskReducer.newTask) {
        let newTask = state.SaveTaskReducer.newTask;
        newTask = new TaskModel(props.route.tasks.length, newTask.title, newTask.description);

        props.route.tasks.push(newTask);
        state.SaveTaskReducer.newTask = null;
        shouldRefreshTasks = true;
    }

    return { tasks: props.route.tasks, shouldRefreshTasks: shouldRefreshTasks }; // Why not state.tasks instead ? How is it working exactly when combing multiple reducers ?
}

function mapDispatchToProps(dispatch) {
    return {
        refreshTasks: () => {
            dispatch(Actions.refreshTasks());
        },
        addTask: () => {
            dispatch(Actions.addTask());
        }
    };
}

const ConnectedTasksOverview = connect(mapStateToProps, mapDispatchToProps)(TasksOverview);

export default ConnectedTasksOverview;

const styles = StyleSheet.create({
    buttonRefresh: {
        flexDirection: 'row',
        width: 200,
        margin: 10
    },
    buttonAdd: {
        flexDirection: 'row',
        width: 200,
        margin: 10,
        marginTop: -43,
        marginLeft: 86
    }
});
