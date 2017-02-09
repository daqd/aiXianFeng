'use strict';

import React, { Component } from 'react'
import {
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'
import px2dp from '../util'
let {width, height} = Dimensions.get('window')
import Home from '../pages/Home'
import Mall from '../pages/Mall'
import Cart from '../pages/Cart'
import My from '../pages/My'

export default class TabView extends Component {
  constructor(props){
    super(props)
    this.state = {
        currentTab: 'Home',
        hideTabBar: false
    }
    this.tabNames = [
      ["首页", "ios-home-outline", "Home", <Home {...this.props}/>],
      ["闪送超市", "md-flash", "Mall", <Mall {...this.props}/>],
      ["购物车", "md-cart", "Cart", <Cart {...this.props}/>],
      ["我的", "ios-contact-outline", "My", <My {...this.props}/>]
    ]
    TabView.hideTabBar = TabView.hideTabBar.bind(this)
    TabView.showTabBar = TabView.showTabBar.bind(this)
  }
  static showTabBar(time){
    this.setState({hideTabBar: false})
  }
  static hideTabBar(time){
    this.setState({hideTabBar: true})
  }
  render(){
    return (
      <TabNavigator
        hidesTabTouch={true}
        tabBarStyle={[styles.tabbar,
          (this.state.hideTabBar?styles.hide:{})
        ]}
        sceneStyle={{ paddingBottom: styles.tabbar.height }}>
          {
            this.tabNames.map((item, i) => {
              return (
                <TabNavigator.Item
                    key={i}
                    tabStyle={styles.tabStyle}
                    title={item[0]}
                    selected={this.state.currentTab === item[2]}
                    selectedTitleStyle={{color: "#666"}}
                    renderIcon={() => <Icon name={item[1]} size={px2dp(22)} color="#666" />}
                    renderSelectedIcon={() => <Icon name={item[1].replace(/\-outline$/, "")} size={px2dp(22)} color="#ffd600" />}
                    onPress={() => this.setState({ currentTab: item[2] })}>
                    {item[3]}
                </TabNavigator.Item>
              )
            })
          }
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
    tabbar: {
      height: px2dp(46),
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    hide: {
      transform: [
        {translateX:width}
      ]
    },
    tabStyle:{
      padding: px2dp(4)
    }
})
