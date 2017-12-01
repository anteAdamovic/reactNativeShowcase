import { ActionTypes } from '../Actions';
import { TaskModel } from '../../models/TaskModel';
export default SaveTaskReducer = (state = [], action) => {

    if (action.type === ActionTypes.SAVE_TASK) {
        console.log(state);
        return { newTask: action.task }
    }

    return state;
};