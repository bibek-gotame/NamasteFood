import { userContext } from "../../utils/userContext";
import { useContext } from "react";
function Header() {
  const { userName } = useContext(userContext);
  return <div className="bg-black p-3 text-white text-center">

    <h1>Header</h1>
    <h1>{userName}</h1>
  </div>;
}

export default Header;
