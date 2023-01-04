import { useRoutes } from "react-router-dom";
import SharedNav from "../components/SharedNav";
import SharedSolutionNav from "../components/SharedSolutionNav";
import { HomePage, NotFoundPage, RepositoryPage, SingleRepoPage,TestErrorPage } from "../pages";

export function Routes (){
    return useRoutes([
        {path:'/', element:<SharedNav />, 
        children:
        [
            {index:true, element:<HomePage />},
            {path:'/solution', element:<SharedSolutionNav />,
            children:
            [
                {path:'repository', element:<RepositoryPage />},
                {path:'error-boundary', element:<TestErrorPage />},
                {path:'repo/:id' , element :<SingleRepoPage />}
            ]
            }
        ]
        },
        {path:'*', element:<NotFoundPage />},

    ])
} 