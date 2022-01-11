import React from "react"

const Hello = () => {
    return React.createElement('div', {id: 'hello'}, 
    React.createElement('h1', null,"Test Hello JSX") 
    )
   

}
export default Hello