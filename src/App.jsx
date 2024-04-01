

import { Provider } from "react-redux";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { store } from "./utils/store/store";
// import { useContext, useState } from "react";
// import { userContext } from "./utils/userContext";
function App() {
  // const { userName, testt } = useContext(userContext);
  // const [username, setUsername] = useState(userName);
  // const [setUser, setSetUser] = useState(userName);

  // console.log(testt +'app');

  // const changeUserName = () => {
  //   setUsername(setUser);
  // };
  return (
    <>
    <Provider store = {store}>
      {/* Provider is a component provided by react-redux to bind the store and app, we pass store={store} as a prop  */}
      {/* <userContext.Provider
        value={{ userName: username, setUser, setSetUser, changeUserName }}
      > */}
        <Header />
        <Home />  
        <Cart/>
      {/* </userContext.Provider> */}
      </Provider>
    </>
  );
}

export default App;
