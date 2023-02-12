import React, { createContext, useState } from "react";
import Component1 from "./useContext/Component1";
// import NMemo from './normalMemo/NMemo'
import Memo from './memo/Memo'
import UseRef from "./useRef/UseRef";
import UseRef2 from "./useRef/UseRef2";
import UseRef3 from "./useRef/UseRef3";
import UseReducer from "./UseReducer/UseReducer";
import UseCallback from "./useCallback/UseCallback";
import Nmemo from "./useMemo/Nmemo";
import UMemo from "./useMemo/UMemo";
import Chooks from "./CustomHooks/Chooks";
import UseCallback1 from "./useCallback/useCallback1/UseCallback1";

export const UserContext = createContext();
const Home = () => {
  const [user, setUser] = useState("Mina Hall");
  const [name, setNser] = useState("prakash");
  return (
      <UserContext.Provider value={{user, name}}>
    
      {/* <NMemo/> */}
      {/* <Memo/> */}
      {/* <h1 style={{color: "red"}}>Hello Style!</h1>
      <h1>djfasjl</h1>
      <p>Add a little style!</p>
      <h1 style={{backgroundColor: "blue"}}>Hello Style!</h1>
      <p>Add a little style!</p> */}
        {/* <Component1 user={user} /> */}
        {/* <UseRef/> */}
        {/* <UseRef2/> */}
        {/* <UseRef3/> */}
        {/* <UseReducer/> */}
        {/* <UseCallback/> */}
        {/* <UseCallback1/> */}
        {/* <Nmemo/> */}
        {/* <UMemo/> */}
        <Chooks/>
    
      </UserContext.Provider>
  );
};

export default Home;
