'use strict';

import React,{Component} from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import Header from '../components/Header'
import px2dp from '../util'
import data from '../data'
const { width, height } = Dimensions.get('window')
export default class Mall extends Component{
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
    dataSource: ds.cloneWithRows(data.category),
    hot: ds.cloneWithRows(data.hot)
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

  _renderCategoryRow(rowData){
    return(
      <View style={styles.shopItem}>

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
  shopItem:{
    width:width-100,
    height:90,
    borderBottomWidth:1,
    backgroundColor:'#FFF',
    borderBottomColor:'#e0e0e0',
  }
})
