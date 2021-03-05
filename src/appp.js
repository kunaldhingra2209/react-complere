import React from 'react'
class App extends React.Component{
    constructor()
    {
        super();
        this.state={
            users:null
        }
    }
    componentDidMount()
    {
        fetch('https://reqres.in/api/users?page=2').then((resp)=>{
            resp.json().then((result)=>{
                console.warn(result.data)
                this.setState({users:result.data})
            })
        })
    }
    render(){
        return(
            <div className="App">
                <h1>fetch api data</h1>
                {
                    this.state.users?
                    this.state.users.map((item,i)=>
                    <div><p>{i}--- {item.first_name} {item.last_name}</p></div>
                    )
                    :
                    null
                }
            </div>
        )
    }
}

export default App;