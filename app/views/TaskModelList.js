import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class TaskModelList extends React.Component {

    render() {
        return (this.props.tasks.map((task, i) => {
            return (
                <View style={styles.task} key={i}>
                    <Text style={styles.taskId}>
                        {task.id}
                    </Text>
                    <Text style={styles.taskTitle}>
                        {task.title}
                    </Text>
                    <Text style={styles.taskDescription}>
                        {task.description}
                    </Text>
                </View>
            );
        }));
    }
}

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row'
    },
    taskId: {
        flex: 2,
        padding: 10
    },
    taskTitle: {
        flex: 4,
        padding: 10
    },
    taskDescription: {
        flex: 6,
        padding: 10
    }
});
