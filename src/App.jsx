

// import { store } from "./utils/store/store";
// import { Provider } from "react-redux";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { useUserContext } from "./utils/useUserContext";
import { useState } from "react";
import { userContext } from "./utils/userContext";
function App() {
  const {userName} = useUserContext()

  const [username, setUsername] = useState(userName);
  const [setUser, setSetUser] = useState(userName);

  
  const changeUserName = () => {
    setUsername(setUser);
  };
  return (
    <>
    {/* <Provider store = {store}> */}
      {/* Provider is a component provided by react-redux to bind the store and app, we pass store={store} as a prop  */}
      <userContext.Provider
        value={{ userName: username, setUser, setSetUser, changeUserName }}
      >
        <Header />
        <Home />  
        <Cart/>
      </userContext.Provider>
      {/* </Provider> */}
    </>
  );
}

export default App;
