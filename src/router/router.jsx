import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import MyBook from "../Pages/MyBook";
import Bookshelf from "../Pages/Bookshelf";
import Profile from "../Pages/Profile";
import PrivateRoute from "../Component/PrivateRouter/PrivateRouter";
import AddBook from "../Pages/AddBook";
import LoginSignIn from "../Pages/LoginSignIn";
import SignIn from "../Component/LoginSignIn/SignIn";
import UpdateBook from "../Pages/UpdateBook";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/About",
                Component: About
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
   
            },
            {
                path: "/loginSignInPage",
                Component:LoginSignIn
            },
            {
                path: "/signin",
                Component:SignIn
            },
            {
                path: "/allbook",
                Component: Bookshelf
            },
            {
                path: "/mybook",
                element: <PrivateRoute>
                    <MyBook></MyBook>
                </PrivateRoute>
            },
            {
                path: "/addbook",
                element: <PrivateRoute>
                    <AddBook></AddBook>
                </PrivateRoute>
            },
            {
                path: "/updatebook",
                element: <PrivateRoute>
                    <UpdateBook></UpdateBook>
                </PrivateRoute>
            },
        ]
    },

]);


export default router;