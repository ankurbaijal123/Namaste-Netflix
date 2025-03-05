import React from "react";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browser",
    element: <Browse />,
  },
]);

const Body = () => {
  return (

      <RouterProvider router={appRouter} />
  );
};

export default Body;
