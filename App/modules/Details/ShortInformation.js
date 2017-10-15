import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,Image,
  Button
} from 'react-native';

import styles from './styles';

const ShortInformation = ({data}) => {
  const {
    weatherIconUrl,
    weatherDesc,
    temp_C,
    humidity,
    time
  } = data;

  return (
     <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Image source ={{uri:weatherIconUrl[0].value}} style={{width:100, height:100}}/>
        <View style={{flex:1, paddingLeft:16, justifyContent:'center'}}>
          {time && 
          <Text style={styles.heading}>Time: 
            <Text style={styles.description}>{` ${parseInt(time)/100}:00 hour`}</Text>
          </Text>}
          <Text style={styles.heading}>Weather: 
            <Text style={styles.description}>{` ${weatherDesc[0].value}`}</Text>
          </Text>
            <Text style={styles.heading}>Temperature: 
            <Text style={styles.description}>{` ${temp_C} degree C`}</Text>
          </Text>
           <Text style={styles.heading}>Humidity: 
            <Text style={styles.description}>{` ${humidity}`}</Text>
          </Text>
        </View>
      </View>
  );
};

export default ShortInformation;