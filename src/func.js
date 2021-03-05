import React from 'react'
export default function run(prop){
    const red=()=>{
        alert("red function is called")

    }
    return <div>
        <h1 on onClick={red}>{prop.text}</h1>
    </div>
}