

// whenever i click the add btn the card should be added in the cart section
import { useSelector } from "react-redux";
import Cards from "../cards/Cards";

function Cart() {

  const res = useSelector((store) => store.cart.items)
  console.log(res);
  return (
  <>
    <div className="  border-t-4 border-black pt-4 mt-10 min-h-[30rem]">
    <h1 className="mx-auto font-bold text-2xl  border-b-4 border-black w-fit h-fit">Cart</h1>
    <div className="flex flex-wrap  gap-4 my-10 pl-4">

      {res.map(res => <Cards key={res.info.id} res={res} NoAdd={false} />)}
    </div>
      </div>;
  </>
  )
}

export default Cart;
