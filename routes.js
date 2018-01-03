import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Platform } from 'react-native';

import Decks from './src/components/Decks'
import AddCard from './src/components/AddCard'
import AddDeck from './src/components/AddDeck'

import DeckInfo from './src/components/DeckInfo'
import Quiz from './src/components/Quiz'

import { Ionicons } from '@expo/vector-icons'

import {charcoal, white, black} from './src/utils/colors'

const Tabs = TabNavigator({
  Decks:{
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-list-box-outline' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-add-circle-outline' size={30} color={tintColor} />
    }
  }
},{
  navigationOptions:{
    header: null
  },
  tabBarOptions:{
    activeTintColor: Platform.OS === 'ios'? charcoal : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : charcoal,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
   }
  }
})


export const MainNav = StackNavigator({
  Home:{
    screen: Tabs
  },
  DeckInfo:{
    screen: DeckInfo,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: black
      },
      headerBackTitle: null,
    }
  },
  AddCard:{
    screen: AddCard,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: black
      },
      headerBackTitle: null,
      title: "Add Card"
    }
  },
  Quiz:{
    screen: Quiz,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: black
      },
      headerBackTitle: null,
      title: "Quiz"
    }
  }
})
