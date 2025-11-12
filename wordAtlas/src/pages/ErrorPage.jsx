import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () =>{
    const error = useRouteError();
    console.log(error);
    return (
        <>
        <p>page was not found</p>
        {error && <p>{error.data}</p>}
        <NavLink to="/"> go home</NavLink>
        </>

    )
}