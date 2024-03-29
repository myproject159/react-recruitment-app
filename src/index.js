import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Login from './container/login/login'
import Register from './container/register/register'
import AutoRoute from './component/authroute/authroute'
import DashBoard from './component/dashboard/dashboard'
import BossInfo from  './container/bossinfo/bossinfo'
import GeniusInfo from  './container/geniusinfo/geniusinfo'
import Chat from './component/chat/chat'
import reducer from './reducer'
import './config'
import './index.css'
const store = createStore(reducer,compose(
    applyMiddleware(thunk),

    window.devToolsExtension?window.devToolsExtension():f=>f
))

    ReactDom.render(
        (<Provider store={store}>
            <BrowserRouter>
                <div>
                    <AutoRoute></AutoRoute>
                    <Switch>
                        <Route path='/bossinfo' component={BossInfo}></Route>
                        <Route path='/geniusinfo' component={GeniusInfo}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/chat/:user' component={Chat}></Route>
                        <Route component={DashBoard}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>),
        document.getElementById('root')
    )
