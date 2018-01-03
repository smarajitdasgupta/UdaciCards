import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'

import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'

import { clearDB } from './src/utils/storageApi'
import { setLocalNotification } from './src/utils/notifications'

import { MainNav } from './routes'

import { charcoal } from './src/utils/colors'

function UdaciStatusBar({ backgroundColor, ...props }){
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends Component {
  
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <UdaciStatusBar backgroundColor={charcoal} barStyle='light-content' />
          <MainNav />
        </View>
      </Provider>
    );
  }
}
