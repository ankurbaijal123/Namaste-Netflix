
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  

  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
