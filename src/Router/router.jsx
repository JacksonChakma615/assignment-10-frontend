import { createBrowserRouter } from "react-router-dom";
import ExploreDetails from "../Components/ExploreDetails";
import UpdatedReview from "../Components/UpdatedReview";
import MainLayout from "../Layout/MainLayout";
import AddReview from "../Pages/AddProperties";
import AllReview from "../Pages/AllProperties";
import ErrorPage from "../Pages/ErrorPage";
import GameWatchList from "../Pages/GameWatchList";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyReview from "../Pages/MyReview";
import Registration from "../Pages/Registration";
import PrivateRoute from "./PrivateRoute";
import AddProperties from "../Pages/AddProperties";
import AllProperties from "../Pages/AllProperties";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-lac-ten.vercel.app/allProperties"),
      },
      {
        path: "/allProperties",
        element: <AllProperties></AllProperties>,
        loader: () =>
          fetch("https://assignment-10-lac-ten.vercel.app/allProperties"),
      },
      {
        path: "/addProperties",
        element: (
          <PrivateRoute>
            <AddProperties></AddProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProperties",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRating",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProperty/:id",
        element: <UpdatedReview></UpdatedReview>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-lac-ten.vercel.app/allProperties/${params.id}`
          ),
      },

      {
        path: "/exploreDetails/:id",
        element: (
          <PrivateRoute>
            <ExploreDetails></ExploreDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-lac-ten.vercel.app/allProperties/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
