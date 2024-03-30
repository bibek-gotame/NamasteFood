
import { useEffect } from "react"
import { data } from "./utils/api"
import Home from "./components/home/Home"
function App() {
  // console.log(data);
// useEffect(()=>{
//   fetchd()
// })
// const fetchd =async()=>{
//   const fdata =  await fetch('https://www.swiggy.com/api/seo/getListing?lat=17.425938120298223&lng=78.39342287825744')
//   const json = await fdata.json()
//   console.log(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// }
  return (
    <>
    {data.restaurants.map((d) => <div key={d.info.id}>
      <img
          className="res-logo "
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
            d.info.cloudinaryImageId
          }
          // alt={`${d.name}`}
        />
    </div> )}
    {/* <Home/> */}
   
     </>
  )
        }

export default App
