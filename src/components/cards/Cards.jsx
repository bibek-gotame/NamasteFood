
import { useUserContext } from "../../utils/useUserContext";

function Cards({res}) {
  
  const{userName} = useUserContext()

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
          <button className="text-center w-full p-2 bg-black text-white font-bold ">Add to Cart</button>
  </div>
    </>
  )
}

export default Cards