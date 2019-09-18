import React from 'react'
import Logo from '../../component/logo/logo'
import {Button, InputItem, List, WhiteSpace, WingBlank} from "antd-mobile";
import { connect } from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from "react-router-dom";
import imoocForm from '../../component/imooc-form/imooc-form.js'

@connect(
    state=>state.user,
    {login}
)
@imoocForm
class Login extends React.Component{
    register = () => {
        console.log(this.props)
        this.props.history.push('./register')
    }
    
    handleLogin = () => {
        console.log(this.props)
        this.props.login(this.props.state)
    }
    render() {
        let h2 = {
            textAlign:'center'
        }
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <Logo></Logo>
                <h2 style={h2}>登录页面</h2>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem onChange={v=>this.props.handleChange('user',v)}>用户名</InputItem>
                        <InputItem onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    </List>
                    <Button onClick={this.handleLogin} type='primary'>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>

        );
    }
}
export default Login