import { createContext } from "react";
import useAxios from "../custom hooks/useAxios";

const DataContext = createContext()

// const data = [
//     {
//         id:1,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     },
//     {
//         id:2,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
//     ,
//     {
//         id:3,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
//     ,
//     {
//         id:4,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
//     ,
//     {
//         id:5,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
//     ,
//     {
//         id:6,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
//     ,
//     {
//         id:7,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
//     ,
//     {
//         id:8,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
//     ,
//     {
//         id:9,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
//     ,
//     {
//         id:10,
//         name:'My Repo',
//         description:'Maxime pariatur mollitia sit iusto nobis reprehenderit. Voluptatibus laborum et repellendus cumque dicta quas, deserunt ut. Laudantium esse dolor a repellendus ducimus'
//     }
// ]


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