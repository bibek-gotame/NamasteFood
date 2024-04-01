// whenever i click the add btn the card should be added in the cart section
import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
// import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/store/cartSlice";
function Cart() {
  const res = useSelector((store) => store.cart.items);
const dispatch = useDispatch()
  // console.log(res);
  return (
    <>
      <div className="  border-t-4 border-black pt-4 mt-10 min-h-[30rem]">
        <div className="flex font-bold text-2xl gap-4">
          {" "}
          <h1 className="    border-b-4 border-black   h-fit">
            Cart
          </h1>
          <button className="  p-2 bg-black text-white  rounded-lg" onClick={()=>{
            dispatch(clearCart())
          }}>
            Clear Cart
          </button>
        </div>
        <div className="flex flex-wrap  gap-4 my-10 pl-4">
          {res.map((res) => (
            <Cards key={res.info.id} res={res} NoAdd={false} />
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default Cart;
