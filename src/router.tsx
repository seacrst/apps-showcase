import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./app";
import { lazy } from "react";

const Natours = lazy(() => import("src/routes/natours"));

export const Router = () => {
    const router = createBrowserRouter([
        {  
            path: "/",
            element: <App/>
        },
        {
            path: "natours",
            element: <Natours/>,
        },
    ]);
    
    return <RouterProvider router={router}/>
};