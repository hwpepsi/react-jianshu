import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style.js'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {actionCreators} from './store'
class Detail extends PureComponent {
    render(){
        const {title, content} = this.props;
        return (
            <div>
                <DetailWrapper>
                    <Header>{title}</Header>
                    <Content 
                    dangerouslySetInnerHTML={{__html: this.props.content}}
                    />
                </DetailWrapper>
            </div>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
    
}


const mapState = (state) =>({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail)) ;