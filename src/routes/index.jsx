import { createBrowserRouter } from "react-router-dom"

import RootLayout from "../layout/RootLayout"
import Homepage from "../pages"
import About from "../pages/About"
import Blog from "../pages/blogs"
import Post from "../pages/blogs/_id"
import { posts, postById } from "../apis/loaders"

import ErrorPage from "../component/ErrorPage"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: posts,
            },
            {
                path: "/blog/:id",
                element: <Post />,
                loader: postById,
            },
            {
                path: "/about",
                element: <About />
            },


        ],
    },
])