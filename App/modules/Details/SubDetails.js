/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,FlatList, ScrollView,
  Button
} from 'react-native';

import { connect } from 'react-redux'

import ShortInformation from './ShortInformation';
import styles from './styles';

export default class SubDetails extends Component<{}> {
  constructor(props){
    super(props);
  }

  _keyExtractor = (item, index) => item.time;

  renderItems({item, index}){
    let {tempC, time, humidity, visibility, cloudcover, weatherDesc, weatherIconUrl, pressure}= item;
    return(
      <View style={[styles.card, {marginVertical:10, padding:10, backgroundColor:'#F5FCFF'}]}>
        <ShortInformation data={{temp_C:tempC, time, humidity, visibility, cloudcover, weatherDesc, weatherIconUrl, pressure}}/>
      </View>
    );
  }

  render() {
    console.log(this.props);
    let {params}= this.props.navigation.state;
    let {astronomy, hourly, mintempC, maxtempC, sunHour, totalSnow_cm, uvIndex, date}= params.weather
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.descriptionBox, styles.card]}>
          <View>
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
            {(astronomy && astronomy.length > 0) && 
            <View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={styles.heading}>Sunrise: 
                    <Text style={styles.description}>{` ${astronomy[0].sunrise}`}</Text>
                  </Text>
                  <Text style={styles.heading}>Sunset: 
                    <Text style={styles.description}>{` ${astronomy[0].sunset}`}</Text>
                  </Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.heading}>Moonrise: 
                      <Text style={styles.description}>{` ${astronomy[0].Moonrise}`}</Text>
                    </Text>
                    <Text style={styles.heading}>Moonset: 
                      <Text style={styles.description}>{` ${astronomy[0].moonset}`}</Text>
                    </Text>
                </View>
            </View>}
          </View>
        </View>
        {(hourly && hourly.length >0)&& 
        <View style={{flex:1}}>
            <View style={[styles.descriptionBox, styles.card, {marginTop:16}]}>
                <Text style={[styles.heading]}>Hourly information</Text>
            </View>
            <FlatList
              style={styles.list}
              data={hourly}
              renderItem={this.renderItems.bind(this)}
              keyExtractor={this._keyExtractor}
              />
        </View>}
        
      </ScrollView>
    );
  }
}

SubDetails.navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
});


// const mapStateToProps = (state) => ({
//   weather: state.details.weather,
// });
// const mapDispatchToProps = (dispatch) => {
//   return {}
// }


// export default connect(mapStateToProps, mapDispatchToProps)(SubDetails);