import { Link, Outlet } from "react-router-dom";


const RootLayout = () => {
    return (
        <>
            <Link to="/"> HOme </Link> | <Link to="/blog">Blog</Link> |<Link to="about">About</Link>
            <p />
            <Outlet />
        </>
    )
}

export default RootLayout;