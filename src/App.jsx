import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const MybookingPage = lazy(() => import("./pages/MybookingPage/MybookingPage"));
const BookingPage = lazy(() => import("./pages/BookingPage/BookingPage"));
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "mybooking",
          element: (
            <ProtectedRoute>
              <MybookingPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "detailspage/:id",
          element: <DetailsPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "bookingpage",
          element: (
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
