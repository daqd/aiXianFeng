'use strict';

import React,{Component} from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'
import Header from '../components/Header'
import px2dp from '../util'
import data from '../data'
import Icon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')
export default class Mall extends Component{
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
    dataSource: ds.cloneWithRows(data.category),
    hot: ds.cloneWithRows(data.supermarket.hot)
};
  }

  render(){
    return(
      <View>
        <Header></Header>
        <View style={styles.mallContent}>
          <ListView
            contentContainerStyle={styles.categoryWrap}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
          />
          <View style={styles.shopList}>
            <View style={styles.shopOrderByWrap}>
              <View style={styles.orderByItem}><Text>综合排序</Text></View>
              <View style={styles.orderByItem}><Text>按价格</Text></View>
              <View style={styles.orderByItem}><Text>按销量</Text></View>
            </View>
            <ListView
              contentContainerStyle={styles.categoryContent}
              dataSource={this.state.hot}
              renderRow={this._renderCategoryRow.bind(this)}
            />
          </View>
        </View>
        <View style={{width:width,height:px2dp(50)}}></View>
      </View>
    )
  }

  _renderRow(rowData){
    return(
      <TouchableOpacity onPress={this._selectCategoryItem}>
        <View style={styles.categoryItem}>
          <Text style={{color:'#7d7d7d'}}>
            {rowData}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  _selectCategoryItem(rowID){
    console.log(rowID);
  }
  /***
  *渲染分类商品内容
  **/
  _renderCategoryRow(rowData){
    return(
      <View style={styles.shopItem}>
        <View style={styles.shopItemImg}>
          <Image
            source={rowData.img}
            style={{width:70,height:70}}
          />
        </View>
        <View style={styles.shopItemInfo}>
          <View style={styles.shopItemInfoItem}><Text>{rowData.name}</Text></View>
          <View style={styles.shopItemInfoItem}><Text style={{color:'#999',fontSize:13}}>{rowData.standard}</Text></View>
          <View style={styles.shopItemInfoItem}><Text style={{color:'#ff3800'}}>￥{rowData.unitPrice}</Text></View>
          <View style={styles.addToCart}>
            <Icon name={'ios-add-circle-outline'} size={px2dp(28)} color="#c9c9c9"/>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  categoryWrap:{
    width:100,
    backgroundColor:'#FFF',
    marginBottom:px2dp(50)
  },
  mallContent:{
    width:width,
    flexDirection:'row'
  },
  categoryItem:{
    width:100,
    height:45,
    borderBottomWidth:1,
    backgroundColor:'#f8f8f8',
    borderBottomColor:'#e0e0e0',
    alignItems:'center',
    justifyContent:'center',
  },
  shopList:{
    width:width-100,
  },
  shopOrderByWrap:{
    width:width-100,
    height:45,
    flexDirection:'row',
    borderBottomColor:'#e0e0e0',
    borderBottomWidth:1,
    backgroundColor:'#FFF'
  },
  orderByItem:{
    flex:1,
    height:45,
    justifyContent:'center',
    alignItems:'center',
  },
  categoryContent:{
    backgroundColor:'#FFF',
  },
  shopItem:{
    width:width-110,
    height:90,
    marginLeft:10,
    borderBottomWidth:1,
    backgroundColor:'#FFF',
    borderBottomColor:'#e0e0e0',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  shopItemImg:{
    width:70,
    height:70,
    overflow:'hidden',
  },
  shopItemInfo:{
    width:width-210,
    height:70,
    position:'relative',
    alignItems:'flex-start',
    justifyContent:'center',
    marginLeft:10
  },
  shopItemInfoItem:{
    flex:1,
  },
  addToCart:{
    position:'absolute',
    right:0,
    bottom:0,
    width:30,
    height:30,
  }
})
