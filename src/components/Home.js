import React, { createContext, useState } from "react";
import Component1 from "./useContext/Component1";
// import NMemo from './normalMemo/NMemo'
// import Memo from './memo/Memo'

// export const UserContext = createContext();
const Home = () => {
  const [user, setUser] = useState("Mina Hall");
  return (
      // <UserContext.Provider value={{user}}>
    <div>
      {/* <NMemo/> */}
      {/* <Memo/> */}
      {/* <h1 style={{color: "red"}}>Hello Style!</h1>
      <h1>djfasjl</h1>
      <p>Add a little style!</p>
      <h1 style={{backgroundColor: "blue"}}>Hello Style!</h1>
      <p>Add a little style!</p> */}
        <Component1 user={user} />
    </div>
      // </UserContext.Provider>
  );
};

export default Home;
