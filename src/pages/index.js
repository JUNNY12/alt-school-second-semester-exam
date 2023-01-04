import React from "react";

const HomePage = React.lazy(() => import("./Home"))
const NotFoundPage = React.lazy(() => import("./NotFound"))
const RepositoryPage = React.lazy(() => import("./Repository"))
const TestErrorPage = React.lazy(() => import("./TestError"))
const SingleRepoPage = React.lazy(() => import("./SingleRepo"))


export {
    HomePage,
    NotFoundPage,
    RepositoryPage,
    SingleRepoPage,
    TestErrorPage
}