import React, { useState } from 'react'
import Todos from './Todos';

const UseCallback = () => {
    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  console.log('first')
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  return (
<>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>  )
}

export default UseCallback