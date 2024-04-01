

// whenever i click the add btn the card should be added in the cart section
import { useSelector } from "react-redux";
import Cards from "../cards/Cards";

function Cart() {
  const res = useSelector((store) => store.cart.items)
  console.log(res);
  return (
  <>
    <div className=" flex gap-4 my-20 mx-4 border-t-4 border-black pt-4">
      {res.map(res => <Cards key={res.info.id} res={res}/>)}
      </div>;
  </>
  )
}

export default Cart;
