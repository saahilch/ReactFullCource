import React from "react";
// function Greet(){
//     return <h1>Hellow Saahil</h1>
// }
//props used here
const Greet =(props)=>{ 
    return( 
<div>
    <h1>
       {/* TO use Props Simpy pass here by children proerty name*/} 
    Hellow {props.name} a.k.a {props.heroName}
    </h1>
{props.children }</div>
    )
}

export default Greet