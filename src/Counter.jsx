import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const incrementOne = () =>{
        setCount(count + 1);
    }
    const incrementThree = () =>{
        setCount((previousCount) => previousCount + 1);
        setCount((previousCount) => previousCount + 1);
        setCount((previousCount) => previousCount + 1);
    }
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementOne}>+1</button>
            <button onClick={incrementThree}>+3</button>
        </div>
    )
}