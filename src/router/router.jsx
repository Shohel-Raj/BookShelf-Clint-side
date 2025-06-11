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
import BookDetaills from "../Pages/BookDetaills";
import PageAnim from "../Component/SharedComponent/PageAnim";
import Error from "../Pages/Error";
import Loader from "../Component/Loader/Loader";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement:<Error></Error>,
        children: [
            {
                index: true,
                loader:()=>fetch(`${import.meta.env.VITE_ApiCall}/hightestUpvoto`),
                hydrateFallbackElement:<Loader></Loader>,
                element: <PageAnim>
                    <Home></Home>
                </PageAnim>
            },
            {
                path: "/About",
                element: <PageAnim>
                    <About></About>
                </PageAnim>
            },
            {
                path: "/profile",
                element: <PageAnim>
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                </PageAnim>

            },
            {
                path: "/loginSignInPage",
                element:<PageAnim>
                    <LoginSignIn></LoginSignIn>
                </PageAnim>
            },
            {
                path: "/signin",
                element:<PageAnim>
                    <SignIn></SignIn>
                </PageAnim>
            },
            {
                path: "/allbook",
                loader:()=>fetch(`${import.meta.env.VITE_ApiCall}/books`),
                hydrateFallbackElement:<Loader></Loader>,
                element: <PageAnim>
                    <Bookshelf></Bookshelf>
                </PageAnim>
            },
            {
                path: "/bookdetails/:id",
                loader:({params})=>fetch(`${import.meta.env.VITE_ApiCall}/book/${params.id}`),
                hydrateFallbackElement:<Loader></Loader>,
                element: <PageAnim>
                    <BookDetaills></BookDetaills>
                </PageAnim>
            },
            {
                path: "/mybook",
                element: <PageAnim>
                    <PrivateRoute>
                        <MyBook></MyBook>
                    </PrivateRoute>
                </PageAnim>
            },
            {
                path: "/addbook",
                element: <PageAnim>
                    <PrivateRoute>
                    <AddBook></AddBook>
                </PrivateRoute>
                </PageAnim>
            },
            {
                path: "/updatebook/:id",
                loader:({params})=>fetch(`${import.meta.env.VITE_ApiCall}/book/${params.id}`),
                hydrateFallbackElement:<Loader></Loader>,
                element: <PageAnim>
                    <PrivateRoute>
                    <UpdateBook></UpdateBook>
                </PrivateRoute>
                </PageAnim>
            },
        ]
    },

]);


export default router;