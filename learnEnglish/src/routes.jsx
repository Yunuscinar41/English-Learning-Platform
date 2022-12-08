import { createBrowserRouter, Link } from "react-router-dom";
import NotFound from "./pages/static/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>CİCİKUSBABACIK <Link to="/about">about </Link> </div>,
        errorElement: <NotFound />,
    },
    {
        path: "/about",
        element: <div>Kral Dragon  <Link to="/contact">contact </Link> </div>,
        errorElement: <NotFound />,
    },
    {
        path: "/contact",
        element: <div>Kral Dragon  <Link to="/">Home </Link> </div>,
        errorElement: <NotFound />,
    },

]);
export default router