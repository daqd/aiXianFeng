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
          <Text style={{justifyContent:'center',alignItems:'center',marginRight:3}}>
            方家村附近
          </Text>
          <View style={{position:'relative',top:2}}>
            <Icon name={'md-arrow-dropdown'} size={px2dp(25)} color="#000000"/>
          </View>
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
    paddingTop: px2dp(isIOS?20:0),
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    borderBottomColor:'#e0e0e0',
    borderBottomWidth:1,
  },
  topLeftRightItem:{
    width:50,
    height:isIOS?headH-20:headH,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  topCenterText:{
    flex:1,
    height:isIOS?headH-20:headH,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  }
})
