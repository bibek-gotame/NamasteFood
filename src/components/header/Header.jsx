
import {useUserContext} from "../../utils/useUserContext";
import {  useSelector } from "react-redux";
function Header() {
  const { userName } = useUserContext()
  

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
