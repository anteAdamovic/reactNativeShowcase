export class ActionTypes {
    static SAVE_TASK = 'SAVE_TASK';
    static REFRESH_TASKS = 'REFRESH_TASKS';
    static ADD_TASK = 'ADD_TASK';
};

export class Actions {
    static saveTask = (task) => {
        return {
            type: ActionTypes.SAVE_TASK,
            task
        }
    };
    static refreshTasks = () => {
        return {
            type: ActionTypes.REFRESH_TASKS
        }
    };
    static addTask = () => {
        return {
            type: ActionTypes.ADD_TASK
        }
    };
}