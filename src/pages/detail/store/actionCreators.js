import axios from 'axios'
import * as constants from './constants'
const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) =>{
        axios.get('https://www.easy-mock.com/mock/5c77437e8fb19e362fb034a5/api/detail?id=' + id).then((res)=>{
            const result = res.data.data
            dispatch(changeDetail(result.title, result.content))
        })
    }
}