import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import {initListAction} from './actionCreator'
import axios from 'axios';
import { from } from 'rxjs';

function* getInitList(){
    const res = yield axios.get(' https://www.easy-mock.com/mock/5c77437e8fb19e362fb034a5/api/list.json');
    const action = initListAction(res.data);
    yield put(action);

    // axios.get(' https://www.easy-mock.com/mock/5c77437e8fb19e362fb034a5/api/list.json').then((res) => {
    //     const data = res.data;
    //     const action = initListAction(data);
    //     console.log(action);
    //     //store.dispatch(action);
    // })
}
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

  
export default mySaga;