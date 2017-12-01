import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Actions } from '../services/Actions';
import * as actionCreators from '../services/ActionCreators';

import TasksOverview from '../views/TasksOverview';
import TaskInputForm from '../views/TaskInputForm';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class TabViewLayout extends PureComponent {

  constructor(props) {
    super();
    console.log('tabViewLayout', props);
  }

  _handleIndexChange = index => {
    // update index
    console.log('i:', this.props);
    this.props.actions.addTask();
  };

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    overview: TasksOverview,
    input: TaskInputForm,
  });

  tempProps = {
    index: 0,
    routes: [
      { key: 'overview', title: 'Overview', tasks: [] },
      { key: 'input', title: 'New Task' },
    ],
  };

  render() {
    return (
        <TabViewAnimated
            style={styles.container}
            navigationState={this.props.navigationState}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
        />
    );
  }
}

function mapStateToProps(state, props) {
  // update tab index on AddTask action
  console.log('s:',state);
  console.log('p:',props);
  return { navigationState: state.AddTaskReducer }; 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export const ConnectedTabViewLayout = connect(mapStateToProps, mapDispatchToProps)(TabViewLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});