import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators} from './store';
import {actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
} from './style.js'



class Header extends Component {
    getListArea (){
        const {focused , trendingList, page, handleMouseEnter, handleMouseLeave, mouseIn, totalPage, handleChangePage} = this.props;
        const newList = trendingList.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = (page - 1)*10; i < page * 10; i++){
                if(i < newList.length){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
                
            }
        }
        
        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        search
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                        change
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    
    render() {
        const {focused, handleInputBlur, handleInputFocus, trendingList, login, handleLogout}  = this.props;
        return (
            <HeaderWrapper>
                <Link to='./'>
                <Logo />
                </Link>
                <Nav>
                    <NavItem className="left">first page</NavItem>
                    <NavItem className="left">download</NavItem>
                    {
                        login ? <Link to='/login'><NavItem className="right" onClick={handleLogout}>log out</NavItem></Link> :
                        <Link to='/login'><NavItem className="right">log in</NavItem></Link>

                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => { handleInputFocus(trendingList) }}
                                onBlur={handleInputBlur}
                            >

                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} >
                        &#xe614;                        
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'><Button className="writting">
                        <i className="iconfont">&#xe615;</i>
                        essay
                    </Button>
                    </Link>
                    <Button className="reg">sign up</Button>
                </Addition>
            </HeaderWrapper>
        )

    }

    
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        trendingList: state.getIn(['header', 'trendingList']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputFocus(list) {
            if(list.size === 0) {
                dispatch(actionCreators.getList());
            }          
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        handleLogout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);