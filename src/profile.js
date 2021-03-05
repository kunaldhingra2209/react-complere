import { render } from '@testing-library/react'
import React from 'react'

class profile extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'kunal',
            email:'dhingra2209@gmail.com',
            show:true
        }
    }
    componentDidMount(){
        console.warn("called life cycle")
    }
    updateState(){
        this.setState({
            // name:'dhingra',
            show:false
        })
    }
    
    render()
    {
        return(
            <div>
                {
                this.state.show ? 
                <h1>hello {this.state.name}</h1>
                // <h1>email: {this.state.email}</h1>
                :null
                
                
                }
                <button onClick={()=>{this.updateState()}}>update name</button>
            </div>
        )
    }
}

export default profile