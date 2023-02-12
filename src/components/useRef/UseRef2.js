import React, { useRef } from 'react'

const UseRef2 = () => {
    const inputElement = useRef();
    const Element = useRef();

    const focusInput = () => {
      inputElement.current.focus();
    };
  return (
    
     <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <p ref={Element} onClick={()=>{Element.current.style.backgroundColor = 'blue'}}>click me</p>
    </>
  )
}

export default UseRef2