import React from 'react'
import { connect } from 'react-redux'
import { addGun,addGunAsync} from "./index.rudux";
@connect(
    state=>({num:state}),
    { addGun,addGunAsync}
)
class App extends React.Component{

    render() {
        const addGun = this.props.addGun
        const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <h1>现在有机关枪{this.props.num}把</h1>
                <button onClick={addGun}>加机关枪</button>
                <button onClick={addGunAsync}>拖两天再给</button>
            </div>
        )
    }
}

export default App