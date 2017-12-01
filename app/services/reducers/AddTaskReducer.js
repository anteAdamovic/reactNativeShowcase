import { ActionTypes } from '../Actions';

const initialState = {
    index: 0,
    routes: [
      { key: 'overview', title: 'Overview', tasks: [] },
      { key: 'input', title: 'New Task' },
    ],
  };

const AddTaskReducer = (state = initialState, action) => {

    if (action.type === ActionTypes.ADD_TASK) {
        return Object.assign({}, state, { index: state.index == 0 ? 1 : 0 });
    }

    return state;
};

export default AddTaskReducer;