import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App.jsx'
import myntraStore from "./store/index.js"
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './Routes/Home.jsx';
import Bag from './Routes/Bag.jsx'
import "./index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
         path: '/' , element: <Home/>
      },
      {
        path: '/bag' , element: <Bag/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
       <RouterProvider router={router}/>
    </Provider>
  
  </React.StrictMode>,
)
