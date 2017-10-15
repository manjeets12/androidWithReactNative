import { fork , takeLatest} from 'redux-saga/effects';


/* ----------------Action Types---------------------- */
import { DetailsTypes } from 'app/reducers/details'



/* ----------------sagas---------------------- */
import details from './details';



export default function* root() {
  yield [
    /**
     * add your saga request at this point
     * can be used to get response from server Asynchronous
     */
    takeLatest(DetailsTypes.GET_WEATHER, details),
  ]
}