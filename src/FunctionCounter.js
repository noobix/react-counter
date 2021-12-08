import React, { useState } from "react";

const FuntionCounter = () =>{
    const [state,setState]=useState(0)
    function HandleIncrease(){
        setState(state +1)
    }
    function HandleDecrease(){
        setState(state -1)
    }
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={HandleIncrease}>Increase Count</button>
            <button onClick={HandleDecrease}>Decrease Count</button>
        </div>
    )
}
export default FuntionCounter