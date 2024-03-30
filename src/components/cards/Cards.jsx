
function Cards({res}) {
  const {
    name,
  cuisines,
  avgRating,
  costForTwo,
  deliveryTime,
  cloudinaryImageId
  }=res.info
  return (
    <>
  <div className="flex flex-wrap  gap-2 flex-col w-[20rem] bg-gray-100 border-gray-400 border-2  rounded-lg ">
  <img
          className="res-logo "
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
          <h4>{deliveryTime} minutes</h4>
        </div>
  </div>
    </>
  )
}

export default Cards