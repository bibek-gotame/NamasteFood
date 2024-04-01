import { userContext } from "../../utils/userContext";
import { useContext } from "react";
import {  useSelector } from "react-redux";
function Header() {
  const { userName } = useContext(userContext);

  const cartItems = useSelector((store)=> store.cart.items)
  // console.log(cartItems);
  return <div className="bg-black p-3 text-white text-center">
<div className="flex gap-20">

    <h1>Cart({cartItems.length})</h1>
    <h1>{userName}</h1>
    <h1>{}</h1>
</div>
  </div>;
}

export default Header;
