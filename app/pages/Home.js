'use strict';

import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import Header from '../components/Header'
import ImagesSrc from '../imagesSrc'
import px2dp from '../util'
import Icon from 'react-native-vector-icons/Ionicons'

const isIOS = Platform.OS == "ios"
const headH = px2dp(isIOS?70:50)
const { width, height } = Dimensions.get('window')

export default class Home extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={{position:'relative'}}>
        {this.renderHeader()}
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Swiper height={200}
                  loop={true}
                  index={0}
                  autoplay={true}
                  horizontal={true}
          >
          {this.renderImg()}
          </Swiper>
        <View style={styles.quickEntryWrap}>
          {this.renderQuickEntry()}
        </View>

        {this.renderSpecilSalling()}

        {this.renderHomeBusiness()}

        <View style={{width:width,height:px2dp(50)}}></View>
        </ScrollView>
      </View>
    )
  }
  renderHeader(){
      return(
        <View style={styles.header}>
          <View style={styles.topLeftRightItem}>
            <Icon name={'ios-qr-scanner-outline'} size={px2dp(22)} color="#FFF"/>
          </View>
          <View style={styles.topCenterText}>
            <Text style={{color:'#FFF',fontSize:12}}>
              配送至：
            </Text>
            <Text style={{justifyContent:'center',color:'#FFF',alignItems:'center'}}>
              方家村附近
            </Text>
            <Icon name={'md-arrow-dropdown'} size={px2dp(25)} color="#FFF"/>
          </View>
          <View style={styles.topLeftRightItem}>
            <Icon name={'ios-search-outline'} size={px2dp(22)} color="#FFF"/>
          </View>
        </View>
      )
  }
  renderImg(){
    let imageViews=[];
    for (let i = 0; i < ImagesSrc.banner.length; i++) {
      imageViews.push(
          <Image
              key={i}
              style={{flex:1,width:width}}
              source={ImagesSrc.banner[i]}
              />
      );
    }
    return imageViews;
  }
  renderQuickEntry(){
    let quickEntry = [];
    for (let i = 0; i < ImagesSrc.quickEntry.length; i++) {
      quickEntry.push(
        <View key={i} style={styles.quickEntryItem}>
          <View style={styles.quickEntryItemImg}>
            <Image
              source={ImagesSrc.quickEntry[i].imgSrc}
              style={{width:70,height:70,alignSelf:'center'}}
            />
          </View>
          <View style={styles.quickEntryItemName}>
            <Text style={{fontSize:12}}>{ImagesSrc.quickEntry[i].name}</Text>
          </View>
        </View>
      )
    }
    return quickEntry;
  }

  renderSpecilSalling(){
    return(
      <View style={styles.specilSellWrap}>
        <View style={styles.specilSellContent}>
          {this.renderSpecilSellingList()}
        </View>
      </View>
    )
  }

  renderSpecilSellingList(){
    return ImagesSrc.specilSell.map(item => this.renderSpecilSellingItem(item))
  }
  renderSpecilSellingItem(item){
    return(
      <View style={styles.specilSellItem} key={item}>
        <Image
          source={item}
          style={{width:width/3,height:150}}
        />
      </View>
    )
  }

  renderHomeBusiness(){
    return(
      <View>
        <View style={styles.themeSpline}>
          <Image
            source={ImagesSrc.themeSpline}
            style={{width:200,height:50,alignSelf:'center'}}
          />
        </View>

        <View style={styles.businessWrap}>
          <View style={styles.businessWrapItem}>
            <Image
              source={ImagesSrc.hotTheme}
              style={{width:width*0.4,height:50,resizeMode:'cover'}}
            />
          </View>
          <View style={styles.businessWrapItem}>
            <Image
              source={ImagesSrc.everyDaySell}
              style={{width:width*0.4,height:50,resizeMode:'cover'}}
            />
          </View>
        </View>

        <View style={styles.businessSubCicons}>
          {this.renderBusinessList()}
        </View>
      </View>
    )
  }

  renderBusinessList(){
      let businessArr = [];
      for (let i = 0; i < ImagesSrc.business.length; i++) {
        businessArr.push(
          <View key={i} style={styles.businessItem}>
            <View style={styles.businessItemImg}>
              <Image
                source={ImagesSrc.business[i].imgSrc}
                style={{width:60,height:60,alignSelf:'center'}}
              />
            </View>
            <View style={styles.businessItemName}>
              <Text style={{fontSize:12}}>{ImagesSrc.business[i].name}</Text>
            </View>
          </View>
        )
    }
    return businessArr;
  }



}

const styles = StyleSheet.create({
  header: {
    position:'absolute',
    width:width*0.9,
    top:0,
    left:width*0.05,
    zIndex:9999,
    height: headH,
    paddingTop: px2dp(isIOS?30:10),
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  topLeftRightItem:{
    width:headH-35,
    height:headH-35,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#505050',
    borderRadius:45,
    opacity:0.6
  },
  topCenterText:{
    flex:1,
    backgroundColor:'#505050',
    borderRadius:45,
    height:headH-35,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    opacity:0.6,
    marginLeft:30,
    marginRight:30,
  },
  contentContainer:{

  },
  quickEntryWrap:{
    width:width,
    height:90,
    backgroundColor:'#FFF',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#e0e0e0'
  },
  quickEntryItem:{
    flex:1,
    height:90,
    marginLeft:5,
    marginRight:5,
    flexDirection:'column',
    overflow:'hidden'
  },
  quickEntryItemImg:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  quickEntryItemName:{
    height:30,
    alignSelf:'center',
    justifyContent:'center'
  },
  specilSellWrap:{
    width:width,
    backgroundColor:'#FFF',
    marginTop:8,
    flexDirection:'column'
  },
  specilSellContent:{
    width:width,
    flexDirection:'row'
  },
  specilSellItem:{
    flex:1,
    borderWidth:1,
    borderColor:'#e0e0e0',
  },

  themeSpline:{
    width:width,
    height:50,
    marginTop:8,
    backgroundColor:'#FFF'
  },

  businessWrap:{
    width:width,
    height:50,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#FFF'
  },
  businessWrapItem:{
    width:width*0.4,
    height:50
  },

  businessSubCicons:{
    width:width,
    height:80,
    flexDirection:'row',
    backgroundColor:'#FFF',
  },
  businessItem:{
    flex:1,
  },
  businessItemName:{
    justifyContent:'center',
    alignItems:'center',
  }
});