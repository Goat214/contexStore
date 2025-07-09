import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLAyout from "./Layout/MainLAyout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLAyout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App
