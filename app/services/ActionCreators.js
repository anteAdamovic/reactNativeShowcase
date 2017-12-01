import { ActionTypes } from  './Actions';

export function saveTask(task) {
    return {
        type: ActionTypes.SAVE_TASK,
        task
    }
};
export function refreshTasks() {
    return {
        type: ActionTypes.REFRESH_TASKS
    }
};
export function addTask() {
    return {
        type: ActionTypes.ADD_TASK
    }
};