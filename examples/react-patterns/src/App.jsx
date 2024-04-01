import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import {Outlet} from 'react-router-dom'
import "./styles.css";
import HOCPage from "./pages/HOC/HOCPage";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import CompoundComponents from "./pages/CompoundComponents";
import RenderProps from "./pages/RenderProps";

function MainLayout() {
  return(
    <div>
      <header>
        <h1>React patterns Demo</h1>
        <h2> These page shows you many design patterns in ReactJS</h2>
      </header>
      <main>
        <MainNavigation />
        <Outlet />
      </main>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {path: '/HOCPage', element: <HOCPage />},
      {path: '/CompoundComponents', element: <CompoundComponents />},
      {path: '/RenderProps', element: <RenderProps />},
    ],
  }
])

export default function App() {
  return (<RouterProvider router={router} />)
}