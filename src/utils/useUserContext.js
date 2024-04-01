import { useContext } from "react"
import { userContext } from "./userContext"

export const useUserContext = ()=>{
    return useContext(userContext)
}