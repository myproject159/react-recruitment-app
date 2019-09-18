import React from 'react'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {Switch, Route,Redirect} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import Msg from '../../component/msg/msg'
// import {getMsgList, recvMsg} from '../../redux/chat.redux'

@connect(
    state => state,

)
class DashBoard extends React.Component{
    componentDidMount(){
        // if(!this.props.chat.chatmsg.length){
        //     this.props.getMsgList()
        //     this.props.recvMsg()
        // }      
    }
    render(){
        const {pathname} = this.props.location
        const user = this.props.user 
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type == 'genius'
            },
            {
                path: '/genius',
                text: 'Boss',
                icon: 'job',
                title: 'Boss列表',
                component: Genius,
                hide: user.type == 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }
        ]
        return (
                navList.find((v)=>(v.path===pathname))!==undefined ? (
                <div>
                    <NavBar mode="dark" className="am-navbar">{navList.find((v)=>(v.path===pathname)).title}</NavBar>
                    <div >
                        <Switch>
                            {navList.map(v=>(
                                <Route key={v.path} path={v.path} component={v.component}/>
                            ))}
                        </Switch>
                    </div>
                    <NavLinkBar data={navList} className="am-tab-bar"/>
                </div>
            ) : <Redirect to={`/${this.props.user.type}`}/>
        )
    }
}

export default DashBoard