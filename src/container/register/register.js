import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from "antd-mobile";
import {connect} from 'react-redux'
import {register} from "../../redux/user.redux";
import {Redirect} from "react-router-dom";
import imoocForm from '../../component/imooc-form/imooc-form.js'

@connect(
    state=>state.user,
    {register}
)
@imoocForm
class Register extends React.Component{
    componentDidMount() {
        this.props.handleChange('type', 'genius')
    }
    handleRegister = () => {
        this.props.register(this.props.state)
    }
    render() {
       const RadioItem = Radio.RadioItem
        let h2 = {
            textAlign:'center'
        }
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <Logo></Logo>
                <h2 style={h2}>注册页面</h2>
                <List>
                    {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                    <InputItem onChange={v=>this.props.handleChange('user',v)}>用户名</InputItem>
                    <InputItem type='password' onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                    <InputItem type='password' onChange={v=>this.props.handleChange('repeatpwd',v)}>确认密码</InputItem>

                    <RadioItem onChange={()=>this.props.handleChange('type','genius')} checked={this.props.state.type == 'genius'}>
                        牛人
                    </RadioItem>
                    <RadioItem onChange={()=>this.props.handleChange('type','boss')} checked={this.props.state.type == 'boss'}>
                        BOSS
                    </RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </List>
            </div>

        );
    }
}
export default Register