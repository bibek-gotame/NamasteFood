
import { useUserContext } from "../../utils/useUserContext";
import { useDispatch } from "react-redux";
import { addItem } from '../../utils/store/cartSlice';
import { useEffect, useState } from "react";


function Cards({res,NoAdd}) {
  
  const{userName} = useUserContext()
// const cartItems = useUserContext()
// const dispatch = useDispatch()
const [Added, setAdded] = useState(true)

// useEffect(()=>{
//   if(cartItems.length === 0){
//     setAdded(true)
//   }
// },[cartItems])


  const {
    name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
  cloudinaryImageId
  }=res.info

  return (
    <>
  <div className="flex  flex-col justify-between   w-[20rem] bg-gray-100 border-gray-400 border-2  rounded-lg ">
 <div  >
 <img
          className="res-logo h-[17rem]  w-full object-cover"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
            cloudinaryImageId
          }
          alt={`${name}`}
        />
       <div className="p-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo} </h4>
          <h4>{sla.deliveryTime} minutes</h4>
          <h4>{userName}</h4>
        </div>
 </div>
            {NoAdd && <div> {Added? <button className="text-center w-full p-2 bg-black text-white font-bold " 
          onClick={()=>{ 
            dispatch(addItem(res))
             setAdded(!Added)}}> Add to Cart</button>:<h1  className="text-center w-full p-2 bg-black text-white font-bold " >Added</h1>} </div> }
  </div>
    </>
  )
}

export default Cards