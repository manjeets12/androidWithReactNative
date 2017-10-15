import {create} from 'apisauce'

import config from './config'

const api = create({baseURL:config.API_URL});

export default {
    /**
     * place to add your api call
     * @param {*} city 
     * @param {*} numOfDays @default value is 5
     */
    getCityWeather({city, numOfDays=5}){
        let qs = `q=${city}&format=json&num_of_days=${numOfDays}`;
        let url = `weather.ashx?key=${config.API_KEY}&${qs}`
        return api.get(url);
        // return fetch('https://facebook.github.io/react-native/movies.json', {
        //     method: 'get',
        //     headers: {'Accept': 'application/json',}
        // });
       // return fetch('https://api.worldweatheronline.com/premium/v1/weather.ashx?key=41480ba7d1cd4340b1173029171510&q=Delhi&format=json&num_of_days=5');
    },

    /**
     * more generalised method like this can be used
     * 
     * @param {*} url 
     * @param {*} params 
     */
  //   getRequest(url, params){
  //    return api.get(url, {}, params); 
  //  },
}