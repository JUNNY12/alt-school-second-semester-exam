import { createContext } from "react";
import useAxios from "../custom hooks/useAxios";

const DataContext = createContext()

const BASE_URL = 'https://api.github.com/users/JUNNY12/repos'

export function DataProvider ({children}) {

    const {data, loading} = useAxios(BASE_URL)

   return(
    <DataContext.Provider value={{data, loading}} >
        {children}
    </DataContext.Provider>
   )
}

export default DataContext