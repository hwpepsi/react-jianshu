import React ,{Component} from 'react'
import store from './store'
import {connect }from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';

class TodoList extends Component {
  constructor(props){
    super(props);
    //this.handleInputChange = this.handleInputChange.bind(this)
  }
  render() {
    return (<div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
          <button onClick={this.handle}>submit</button>
        </div>
        <ul>
          <li>hello</li>
        </ul>
      </div>
    )
  }


}
//映射关系：state是store中的数据，映射到组件的props中
const mapStateToProps = (state) =>{
  return {
    inputValue: state.inputValue
  }
}

//对store中的数据做修改，我们将store.dispatch挂载到props上，
const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputChange(e){
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    }
  }
}
//connect make componenct connet with store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList) 