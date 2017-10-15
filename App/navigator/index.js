'use strict';
import React from 'react';
import {BackHandler} from 'react-native';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'

import Details from 'app/modules/Details';
import SubDetails from 'app/modules/Details/SubDetails';

const AppRouteConfigs ={
    Details: { screen: Details },
    SubDetails:{screen:SubDetails}
};

export const AppNavigator = StackNavigator(AppRouteConfigs);

class AppWithNavigationState extends React.Component {

  constructor(props){
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }
 
  componentDidMount() {
    //BackAndroid is depricated
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  //added to handle back button functionality on android
  handleBackButton() {
    const {nav, dispatch} = this.props;

    if (nav && nav.routes && nav.routes.length > 1) {
      dispatch(NavigationActions.back());
      return true;
    }
    return false;
  }
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        ...this.props,
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}



export default connect(state =>({nav: state.nav}))(AppWithNavigationState);

