import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import {actionCreators} from './store';
//import {actionCreators} from './store'
class Login extends PureComponent {
    render(){
        const {login, handleLogin} = this.props;
        if(!login){
            return (
                <div>
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder="account" ref={(input) => {this.account = input}}/>
                            <Input placeholder="password" ref={(input) => {this.password = input}}/>
                            <Button onClick={() => {handleLogin(this.account, this.password)}}>log in</Button>
                        </LoginBox>
                    </LoginWrapper>
                </div>
            )
        }else{
            return <Redirect to='/' />
        }


        
    }

    componentDidMount(){
    }
    
}


const mapState = (state) =>({
    login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    handleLogin(account, password){
        //console.log(account, password)
        dispatch(actionCreators.login(account.value, password.value)) 
    }
});

export default connect(mapState, mapDispatch)(Login) ;