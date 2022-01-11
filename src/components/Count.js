import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState('')
    
    const increment = () => {
    setCount(count + 1) 
    }

    const changeText = (e) => {
        setUser(e.target.value)
    }
    console.log(user)


    return (
        <>
        <div> Count: {count}</div>
        <button onClick={increment}>Increment</button>
        <br/>
        <input name ="user"  onChange={changeText} value={user} placeholder="Please Enter Text"/>
        </>
    )
}

export default Counter