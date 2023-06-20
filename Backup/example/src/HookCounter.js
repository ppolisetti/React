import React,{useState} from 'react'

function HookCounter(){
    const [count, setCount]=useState(0)

    return(
     <div className="but1">
        <button onClick={() => setCount(count+1)}>Count:{count}</button>
     </div>
    )
}
export default HookCounter 