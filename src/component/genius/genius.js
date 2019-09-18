/**
 * Boss看到的是牛人列表
 */
import React from 'react'
import {connect} from 'react-redux'

import {Card, WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
    state=>state.chatuser,
    {getUserList}
)

class Genius extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount() {
        this.props.getUserList('boss')
    }

    render() {

        return <UserCard userlist={this.props.userlist}></UserCard>
    }
}

export default Genius