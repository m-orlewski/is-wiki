import { Outlet } from "react-router-dom"
import Navbar from './Navbar';

const Layout = () => {
    return (
        <main className="App">
            <Navbar />
            <div className="content">
                <Outlet />
            </div>

        </main>
    )
}

export default Layout