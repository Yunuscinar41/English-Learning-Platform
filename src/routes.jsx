import { createBrowserRouter, Link } from "react-router-dom";
import NotFound from "./pages/static/NotFound";
import Root from "./pages/Root";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home go to <Link to="/v1/">  v1 </Link> or go to  <Link to="/sign_in">  SignIn </Link> or go to<Link to="/sign_up"> SignUp </Link> </div>,
    },
    {
        path: "/sign_in",
        element: <SignIn />,
    },
    {
        path: "/sign_up",
        element: <SignUp />,
    },
    {
        path: "/v1",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/v1/",
                element: <div>Home <Link to="/v1/SignIn"> go to SignIn </Link></div>,
            },
        ],
    },
]);
export default router