'use strict'
import React,{Component} from 'react'
import {View,Text,StyleSheet,Platform} from 'react-native'
import px2dp from '../util'
import Icon from 'react-native-vector-icons/Ionicons'

const isIOS = Platform.OS == "ios"
const headH = px2dp(isIOS?70:50)

export default class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.header}>
        <View style={styles.topLeftRightItem}></View>
        <View style={styles.topCenterText}>
          <Text style={{justifyContent:'center'}}>
            方家村附近
            <Icon name={'md-arrow-dropdown'} size={px2dp(25)} color="#000000"/>
          </Text>
        </View>
        <View style={styles.topLeftRightItem}>
          <Icon name={'ios-search-outline'} size={px2dp(22)} color="#000000"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFF",
    height: headH,
    paddingTop: px2dp(isIOS?30:10),
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    borderBottomColor:'#e0e0e0',
    borderBottomWidth:1,
  },
  topLeftRightItem:{
    width:50,
    height:headH-30,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  topCenterText:{
    flex:1,
    height:headH-30,
    alignItems:'center',
    justifyContent:'center'
  }
})
