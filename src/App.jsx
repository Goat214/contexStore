import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLAyout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { ProtectedRoutest } from "./Components/ProtectedRoutes";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutest user={user}>
          <MainLayout />
        </ProtectedRoutest>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
