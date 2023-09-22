import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/stats",
          element: <Statistics/>
        },
        {
          path: '/applied',
          loader: () => fetch('../jobs.json'),
          element: <AppliedJobs/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: '/job/:Id',
          loader: () => fetch('../jobs.json'),
          element: <JobDetails/>
        }
      ]
    },
    
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
