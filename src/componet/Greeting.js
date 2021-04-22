import React from 'react';


const Greeting =(props)=>{
    console.log(props);
    return(
        <div>
            <h1>Hello,{props.name} a.k.d{props.heroname}</h1>
        </div>
    )
}
export default Greeting