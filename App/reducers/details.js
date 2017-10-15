import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getWeather:['city', 'numOfDays'],
  weatherSuccess: ['data'],
  weatherFailure: ['error'],
  //logout: null
})

export const DetailsTypes = Types  //type created by createActions function eg. for getWeather we GET_WEATHER as Type.
export default Creators           //acttions from above 

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
   fetching:false,
   data:null,
   weather:[],
   ClimateAverages:[],
   current_condition:[],
   error:null
}

/* ------------- Reducers ------------- */

//trying to call server api
export const request = (state ,{city} ) => {
  return {...INITIAL_STATE, fetching:true, city}
}

// request success
export const success = (state, { data }) => {
  let {ClimateAverages, current_condition, weather} = data;
  return {...state, ClimateAverages, current_condition, weather, fetching:false}
}



// some error occured
export const failure = (state, { error }) =>{
    return {...state, error};
}
  



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_WEATHER]: request,
  [Types.WEATHER_SUCCESS]: success,
  [Types.WEATHER_FAILURE]: failure,
  
  //[Types.LOGOUT]: logout
})
