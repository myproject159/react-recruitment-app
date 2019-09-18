//合并所有reducer并且返回
import { combineReducers } from "redux"
import { user } from './redux/user.redux'
import { chatuser } from "./redux/chatuser.redux"
import { chat } from './redux/chat_redux'

export default combineReducers({user,chat,chatuser})