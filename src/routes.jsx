import { createBrowserRouter, Link } from "react-router-dom";
import NotFound from "./pages/static/NotFound";
import Root from "./pages/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <div>Route1 <Link to="/Route2"> go to Route2 </Link></div>,
            },
            {
                path: "/Route2",
                element: <div>Route2 <Link to="/Route3"> go to Route3 </Link></div>,
            },
            {
                path: "/Route3",
                element: <div>Route3 <Link to="/Route4"> go to Route4 </Link></div>,
            },
            {
                path: "/Route4",
                element: <div>Route4 <Link to="/"> go to Route1 </Link></div>,
            },
        ],
    },


]);
export default router