
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import DetailsActions , {DetailsTypes} from 'app/reducers/details';

import api from  "app/Api";
//mport { Actions } from 'react-native-router-flux'


// attempts to login
export default function * details (request) {
  //console.log(request);
    if(!request) return false;

    let {type} = request
    console.log(request);
    if(type === DetailsTypes.GET_WEATHER) {
      let {city, numOfDays} = request
      console.log('GET_WEATHER_REQUEST');
      const response = yield call(api.getCityWeather, {city, numOfDays});
      console.log('GET_WEATHER_REQUEST_RESPONSE - ', response)
      if (response.ok) {
        if(response.data){
          yield put(DetailsActions.weatherSuccess(response.data.data));
        }
      }else {
        yield put(DetailsActions.weatherFailure(response))
      }
    }
}
