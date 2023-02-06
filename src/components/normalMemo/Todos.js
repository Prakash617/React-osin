import React from 'react'

const Todos = ({ todos }) => {
    console.log("child render");
  return (
    <div>
         <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  )
}

export default Todos