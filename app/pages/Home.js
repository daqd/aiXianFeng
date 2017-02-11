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
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          onScroll={this._onScroll}
          scrollEventThrottle={1}
          >
          <Swiper height={200}
                  loop={true}
                  index={0}
                  autoplay={true}
                  horizontal={true}
                  dot={<View style={{backgroundColor:'#FFF', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 2,}} />}
                  activeDot={<View style={{backgroundColor: '#FFF', width: 18, height: 6, borderRadius: 45, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 2,}} />}
          >
          {this.renderImg()}
          </Swiper>
        <View style={styles.quickEntryWrap}>
          {this.renderQuickEntry()}
        </View>

        {this.renderSpecilSalling()}

        {this.renderHomeBusiness()}

        {this.categoryList()}

        <View style={{width:width,height:px2dp(50)}}></View>
        </ScrollView>
      </View>
    )
  }
  _onScroll(obj){
    console.log(obj.nativeEvent.contentOffset.y);
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

        <View style={styles.hotSaleWrap}>
          {this.renderHotSale()}
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

  renderHotSale(){
    let hotSale = [];
    for (let i = 0; i < ImagesSrc.hotSale.length; i++) {
      hotSale.push(
        <View style={styles.hotSaleItem} key={i}>
            <Image
              source = {ImagesSrc.hotSale[i]}
              style={{width:width*0.4,height:65,resizeMode:'center',alignSelf:'center'}}
            />
        </View>
      )
    }
    return hotSale;
  }

  categoryList(){
    let categoryListArr = [];
    for (var i = 0; i < ImagesSrc.categoryList.length; i++) {
      categoryListArr.push(
        <View style={styles.categoryList} key={i}>
          <View style={styles.categoryCardTitle}>
            <View style={styles.categoryCardName}>
              <Text style={ImagesSrc.categoryList[i].headerStyle}>{ImagesSrc.categoryList[i].name}</Text>
            </View>
            <Text style={{color:'#505050',fontSize:13}}> 更多> </Text>
          </View>
          <View style={styles.categoryBanner}>
            <Image
              source={ImagesSrc.categoryList[i].bannerImg}
              style={{width:width*0.96,height:80,alignSelf:'center',resizeMode:'cover'}}
            />
          </View>
          <View style={styles.categoryProductWrap}>
            {this.renderCategoryProductList(ImagesSrc.categoryList[i].product)}
          </View>
        </View>
      )
    }
    return categoryListArr;
  }

  renderCategoryProductList(product){
    return product.map(item => this.renderCategoryProductItem(item))
  }
  renderCategoryProductItem(item){
    return(
      <View style={styles.CategoryProductItem} key={Math.random()}>
        <Image
          source={item.img}
          style={{width:width*0.6/3,height:60,alignSelf:'center',resizeMode:'center'}}
        />
        <Text style={{marginLeft:5,marginRight:5,marginTop:5,marginBottom:5,fontSize:12}}>
          {item.name.length<7?item.name:item.name.slice(0,8)+'...'}
        </Text>
        <Text style={{marginLeft:5,marginRight:5,marginBottom:5,fontSize:12,color:'#505050'}}>
          {item.standard}
        </Text>
        <Text style={{marginLeft:5,marginRight:5,fontSize:12,color:'#f40'}}>
          ￥{item.unitPrice}
        </Text>
        <View style={styles.addToCart}>
          <Icon name={'ios-add-circle-outline'} size={px2dp(28)} color="#c9c9c9"/>
        </View>
      </View>
    )
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
    width:30,
    height:30,
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
    height:30,
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
  },
  hotSaleWrap:{
    width:width,
    height:140,
    flexDirection:'row',
    backgroundColor:'#FFF',
    flexWrap:'wrap'
  },
  hotSaleItem:{
    width:width*0.5,
    height:70,
    borderWidth:1,
    borderColor:'#e0e0e0',
  },

  categoryList:{
    width:width,
    height:255,
    backgroundColor:'#FFF',
    marginTop:8,
    marginBottom:8,
  },
  categoryCardTitle:{
    width:width*0.96,
    height:30,
    marginLeft:width*0.02,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  categoryBanner:{
    width:width*0.96,
    marginLeft:width*0.02,
    height:80,
  },
  categoryProductWrap:{
    width:width*0.96,
    height:125,
    marginTop:10,
    marginLeft:width*0.02,
    flexDirection:'row',
  },
  CategoryProductItem:{
    width:width*0.96/3,
    height:125,
    borderRightColor:'#e0e0e0',
    borderRightWidth:1,
    position:'relative',
  },
  addToCart:{
    position:'absolute',
    right:0,
    bottom:0,
    width:30,
    height:30,
  }
});
