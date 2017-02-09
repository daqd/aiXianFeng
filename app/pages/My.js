'use strict';

import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class My extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
        <Text>this is My page!</Text>
      </View>
    )
  }
}
