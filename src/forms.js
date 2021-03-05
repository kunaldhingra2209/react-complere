import React from 'react';
export default class Forms extends React.Component{
    constructor()
    {
        super();
        this.state={
            user:null,
            password:null,
            nameerror:"",
            passworderror:""
        }
    }
    vaild()
    {
        if(!this.state.user.includes("@") || this.state.password.length<5)
        {
            this.setState({nameerror:"invalid name" , passworderror:"password length should be more than 5 char"})
        }

    }
    submit()
    {
        // console.warn(this.state)
        if(this.vaild())
        {
            console.log("form has been submitted")
        }
        console.log(this.state);
    }

    render()
    {
        return(
            <div>
                <h1>form hamdling</h1>
                <input type="text" name="user" onChange={(e)=>{this.setState({user:e.target.value})}}></input>
                <p style={{color:"red",fontSize:"12px"}}>{this.state.nameerror}</p>
                <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}></input>
                <p style={{color:"red",fontSize:"12px"}}>{this.state.passworderror}</p>
                <button onClick={()=>this.submit()}>submit form</button>
            </div>
        )

    }
}