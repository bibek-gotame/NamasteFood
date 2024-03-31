import Cards from "../cards/Cards";
import { data } from "../../utils/mockData/api";
import { useState } from "react";
import { useContext} from "react";
import { userContext } from "../../utils/userContext";

function Home() {
  const restaurants = data.restaurants;

  const [resData, setresData] = useState(restaurants);
  const [inputSearch, setinputSearch] = useState("");
  const [filtercount, setFiltercount] = useState(0);

  const {setUser,setSetUser,changeUserName,userName} = useContext(userContext)
  const [testt , setTest] = useState(`I'm test from `)
  const handleRate = () => {
    setresData(restaurants.filter((res) => res.info.avgRating >= 4));
    setFiltercount(1);
  };
console.log(setUser);
  const handleSearch = () => {};

  return (
    <>
  <userContext.Provider value={{...testt}}>  
  {/* why by wrapping card component in the Home component it cannot access the context provided by app component but home can easily use the context proiveded by app component */}
      <div>
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setinputSearch(e.target.value)}
          className="border-2 border-gray-500 rounded-md py-0.5 px-3 font-semibold text-lg  w-60"
        />{" "}
        <button
          onClick={handleSearch}
          className="m-2 border-2 border-black px-4 py-1 rounded-md"
        >
          Search
        </button>
      </div>
      <div>
        <input
          type="text"
          value={setUser}
          onChange={(e) => setSetUser(e.target.value)}
          className="border-2 border-gray-500 rounded-md py-0.5 px-3 font-semibold text-lg  w-60"
        />{" "}
        <button
          onClick={changeUserName}
          className="m-2 border-2 border-black px-4 py-1 rounded-md"
        >
          Change User
        </button>
        <div>{userName}</div>
      </div>
      <div className="flex items-center">
        <h1 className="font-bold text-xl w-fit">Filters ({filtercount})</h1>{" "}
        <button
          onClick={handleRate}
          className="m-2 border-4 border-black px-4 py-2 rounded-md"
        >
          Rated 4+{" "}
        </button>
      </div>
      <div className="p-2">
        <div className="flex flex-wrap gap-4 mx-auto">
          {" "}
          {resData.map((res) => (
            <Cards key={res.info.id} res={res} />
          ))}
        </div>
        {/* <Cards /> */}
      </div>
      </userContext.Provider>
    </>
  );
}

export default Home;
