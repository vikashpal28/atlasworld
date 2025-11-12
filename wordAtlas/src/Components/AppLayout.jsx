import { Outlet } from "react-router"
import { Footer } from "../UI/Footer"
import { Headers } from "../UI/Headers"

export const AppLayout = (children) =>{
    return(
        <>
        <Headers/>
        <Outlet/>
        <Footer/>
        </>
    )
}