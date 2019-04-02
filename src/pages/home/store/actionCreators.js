import axios from 'axios';
import * as constants from './constants'
import {fromJS} from 'immutable'
const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})
const addHomeData = (list, nextPage) => ({
    type: constants.ADD_HOME_DATA,
    list: fromJS(list),
    nextPage
})
export const toggleTopShow = (show) =>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c77437e8fb19e362fb034a5/api/home').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const getMoreList = (page) =>{
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c77437e8fb19e362fb034a5/api/homeList?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeData(result, page + 1));
        })
    }
}