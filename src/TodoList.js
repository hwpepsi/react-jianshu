import React, { Component } from 'react';
import "antd/dist/antd.css";
import store from './store';
import axios from 'axios';

//import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import {  getInitList ,getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction} from './store/actionCreator'
import TodoListUI from './TodoListUi'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    //console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
        <TodoListUI 
          inputValue={this.state.inputValue}
          list={this.state.list}
          handleInputChange={this.handleInputChange}
          handleButtonClick={this.handleButtonClick}
          handleItemDelete={this.handleItemDelete}
        />
      )
  }

  componentDidMount(){
    const action =  getInitList();
    store.dispatch(action);
    console.log(action);
    // const action = getTodoList();
    // store.dispatch(action);
    // axios.get(' https://www.easy-mock.com/mock/5c77437e8fb19e362fb034a5/api/list.json').then((res) => {
    //     const data = res.data;
    //     const action = initListAction(data);
    //     store.dispatch(action);
    // })
  }

  handleInputChange(e){
    //console.log(e.target.value);
    const action =  getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState());
  }
  
  handleButtonClick(){
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index){
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

}

export default TodoList;
