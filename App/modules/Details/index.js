/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import CustomModule from 'app/lib/CustomModule';

import DetailsActions from 'app/reducers/details';
import {Loader} from 'app/modules/Components';
import ShortInformation from './ShortInformation';
import Images from 'app/images';

import styles from './styles';

class Details extends Component<{}> {

  constructor(props){
    super(props);
    this.showSubDetails = this.showSubDetails.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
    let {navigation}= this.props;
    if(navigation.CITY_NAME){
       this.props.getWeather(navigation.CITY_NAME, 30);
    }
  }
  showSubDetails(data){
    const { navigate, CITY_NAME , goBack} = this.props.navigation;
    let {date}= data
    //goBack();
    //CustomModule.finish();
    navigate('SubDetails', {title:`${CITY_NAME} on ${date}`, weather:data});
  }

  _keyExtractor = (item, index) => item.date;

  renderItems({item, index}){
    let {mintempC, maxtempC, sunHour, totalSnow_cm, date}= item;
    return(
        <View style={[styles.listItem, styles.card]}>
          <View style={{flex:1}}>
            <Text style={styles.heading}>Temp range in degree C: 
              <Text style={styles.description}>{` ${mintempC} - ${maxtempC}`}</Text>
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.heading}>Snow in cm: 
                  <Text style={styles.description}>{` ${totalSnow_cm}`}</Text>
                </Text>
                <Text style={styles.heading}>Sun Hour: 
                  <Text style={styles.description}>{` ${sunHour}`}</Text>
                </Text>
            </View>
            <Text style={styles.heading}>Date: 
              <Text style={styles.description}>{` ${date}`}</Text>
            </Text>
          </View>
          <TouchableOpacity 
          onPress={()=>this.showSubDetails(item)}
          style={{width:'20%', height:'100%', justifyContent:'center', alignItems:'flex-end'}}
          >
            <Text style={styles.heading}>More ></Text>
          </TouchableOpacity>
        </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    let {details} = this.props;
    
    return (
      <ScrollView style={styles.container}>
        {details.fetching && <Loader containerStyle={{flex:1}}/>}
        {details.error && <Text>Unfortunately some error occured</Text>}

        {details.current_condition.length !==0 &&
        <View style={[styles.descriptionBox, styles.card]}>
          <Text style={[styles.heading, {marginBottom:10}]}>Today's weather information</Text>
          {details.current_condition.map((item, index)=>{
            return <ShortInformation data ={item}/>
          })}
        </View>}

        {details.weather.length >0 && 
          <FlatList
           style={styles.list}
           data={details.weather}
           renderItem={this.renderItems.bind(this)}
           keyExtractor={this._keyExtractor}
          />}
      </ScrollView>
    );
  }
}

Details.navigationOptions = ({ navigation }) => {
  const { state, setParams } = navigation;
  return {
    headerTitle: `Weather of ${navigation.CITY_NAME}`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerLeft: (
      <TouchableOpacity
        onPress ={()=>CustomModule.finish()}>
        <Image source={Images.back_icon} resizeMode="contain" style={{width:24, height:24, margin:16}}/>
      </TouchableOpacity>
    ),
  };
};

const mapStateToProps = (state) => ({
  details: state.details,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (city, numOfDays) => dispatch(DetailsActions.getWeather(city, numOfDays)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Details);
