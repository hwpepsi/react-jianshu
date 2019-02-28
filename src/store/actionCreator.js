import { GET_INIT_LIST ,CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM , INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios';

export const getInputChangeAction = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () =>({
    type:ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) =>({
    type:DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) =>({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})

// export const getTodoList = () =>{
//     return (dispatch) => {
//         axios.get(' https://www.easy-mock.com/mock/5c77437e8fb19e362fb034a5/api/list.json').then((res) => {
//             const data = res.data;
//             const action = initListAction(data);
//             //console.log(data);
//             dispatch(action);
//         })
//     }
// }