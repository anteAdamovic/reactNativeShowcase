import {ActionTypes} from '../Actions';

export default RefreshTasksReducer = (state = [], action) => {
    let newState;

    if (action.type === ActionTypes.REFRESH_TASKS) {
        // Just gonna skip fetching data from the server
        newState = {
            tasks: [
                {
                    id: 0,
                    title: 'FirstTask',
                    description: 'First task description ...'
                }, {
                    id: 1,
                    title: 'SecondTask',
                    description: 'Second task description ...'
                }
            ]
        };
    } else {
        newState = state;
    }

    return newState;
};