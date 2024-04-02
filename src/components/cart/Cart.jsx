// whenever i click the add btn the card should be added in the cart section
import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
// import { useDispatch } from "react-redux";
import { clearCart,removeItem } from "../../utils/store/cartSlice";
function Cart() {
  const res = useSelector((store) => store.cart.items); // * store is an object that contains data of slice
  const dispatch = useDispatch();
  console.log(res);
  return (
    <>
      <div className="  border-t-4 border-black pt-4 mt-10 min-h-[40rem]">
        <div className="flex font-bold text-2xl gap-4">
          {" "}
          <h1 className="    border-b-4 border-black   h-fit">
            Cart - ({res.length})
          </h1>
          <button
            className="  p-2 bg-black text-white  rounded-lg"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
        </div>
        {res.length === 0 && <h1>No Items Are Available</h1>}
        <div className="flex flex-wrap  gap-4 my-10 pl-4">
          {res.map((res) => (
            <div key={res.info.id} className="relative">
              <Cards res={res} NoAdd={false} />
              <button className="p-1 bg-black text-white  rounded-lg absolute right-2 bottom-2"
              onClick={()=>{
                dispatch(removeItem(res.info.id))
              }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default Cart;
