import {api} from "."

export const repos = api.injectEndpoints({
    endpoints:(build) => ({
        getRepos:build.query({
            query:() => '/users/JUNNY12/repos'
        })
    })
})

 const {useGetReposQuery} = repos
 export {useGetReposQuery}

