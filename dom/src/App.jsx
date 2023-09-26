import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Task1 from "./components/task1/Task1"
import Task2 from "./components/task2/Task2"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import Modal from "./components/utilities/Modal"


function App() {

  const router = createBrowserRouter([
    {
      path:'/users',
      element:<Task1/>,
    },
    {
      path:'/shapes',
      element:<Task2/>
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer/>
      
    </>
  )
}

export default App
