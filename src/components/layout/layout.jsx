import { Outlet } from "react-router"
import { Footer } from "../footer/footer"
import { Header } from "../header/header"
import { ProgressBar } from "../progressBar/progressBar"


export const Layout = () => {
    return (
        <div>
            <ProgressBar />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}