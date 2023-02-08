import React, { useContext } from 'react'
// import React, {  } from 'react'
// import { UserContext } from '../Home";
import { UserContext } from '../Home'
const Components4 = () => {
    const {user,name} = useContext(UserContext);
  return (
    <div>Components4 {user} {name}</div>
  )
}
  
export default Components4