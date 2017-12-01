import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {ConnectedTabViewLayout} from './layout/TabViewLayout';

// Reducers
import AddTaskReducer from './services/reducers/AddTaskReducer';
import RefreshTasksReducer from './services/reducers/RefreshTasksReducer';
import SaveTaskReducer from './services/reducers/SaveTaskReducer';

export class TasksApp extends React.Component {
    store = createStore(combineReducers({AddTaskReducer, RefreshTasksReducer, SaveTaskReducer}));

    render() {
        return (
            <Provider store={this.store}>
                <ConnectedTabViewLayout/>
            </Provider>
        );
    }
}
