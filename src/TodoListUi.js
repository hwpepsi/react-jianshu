import React , { Fragment} from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) =>{
    return (
        <Fragment>
            <div style={{marginTop: '10px', marginLeft:'10px'}}>
            <Input 
                value={props.inputValue} 
                placeholder="Input info" 
                style={{width:'300px', marginRight:'10px'}}
                onChange={props.handleInputChange}
            />
            <Button type='primary' onClick={props.handleButtonClick}>submit</Button>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item , index) => (<List.Item onClick={ () => props.handleItemDelete(index)}>{item}</List.Item>)}
            />
            </div>
        </Fragment>
    )
}
/*class TodoListUI extends Component {
    render() {
        return (
            <Fragment>
                <div style={{marginTop: '10px', marginLeft:'10px'}}>
                <Input 
                    value={this.props.inputValue} 
                    placeholder="Input info" 
                    style={{width:'300px', marginRight:'10px'}}
                    onChange={this.props.handleInputChange}
                />
                <Button type='primary' onClick={this.props.handleButtonClick}>submit</Button>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item , index) => (<List.Item onClick={ (index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
                </div>
            </Fragment>
        )
    }
}*/

export default TodoListUI