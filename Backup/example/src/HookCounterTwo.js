import React,{useState} from 'react'

function HookCounterTwo(){
    const startValue=0;
    const [value, setCount]=useState(startValue);
    
    // const incrementbyFive= ()=>{
      
    //      for(let i=0; i<5; i++){
    //             setCount(value=>value+1)
    //      }
    // }
    return(
        <div>
            
            {/* <button onClick={()=>setCount(startValue)}>Reset</button> */}
            <button onClick={() => setCount(value- 1)}>-</button>
            <button>{value}</button>
            <button onClick={() => setCount(value+ 1)}>+</button>
            
            {/* <button onClick={incrementbyFive}>Increment5</button> */}
        </div>
    )
}
export default HookCounterTwo