import { INIT_LIST_ACTION,CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'
const defaultState = {
    inputValue:'123',
    list:[1, 2, 3]
}
//we can take 'state' , but cant change state
export default (state = defaultState, action) =>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        //console.log(newState);
        return newState;  
    }
    if(action.type === DELETE_TODO_ITEM){
        //the copy of state : newState
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        //console.log(newState);
        return newState;  
    }

    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}