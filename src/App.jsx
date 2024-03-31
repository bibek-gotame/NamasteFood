// import { data } from "./utils/mockData/api";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

import { useContext,Provider, useState } from "react";
import { userContext } from "./utils/userContext";
function App() {

  const {userName,testt} = useContext(userContext)
  const [username, setUsername] = useState(userName)
    const [setUser, setSetUser] = useState(userName)

    console.log(testt +'app');
    
  const changeUserName = ()=>{
    setUsername((setUser))
  }
  return (
    <>
        <userContext.Provider value={{userName : username,setUser,setSetUser,changeUserName}}> 
      <Header />
      <Home />
      </userContext.Provider>

    </>
  );
}

export default App;
