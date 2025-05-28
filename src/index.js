import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Context from './Context';
import Addteam from './Pages/Addteam';
import Viewuser from './Pages/Viewuser';
import Viewteam from './Pages/Viewteam';
import ViewReact from './Pages/ViewReact';
import AddReact from './Pages/AddReact';
import ViewJavascript from './Pages/ViewJavascript';
import AddJavascript from './Pages/AddJavascript';
import AddNode from './Pages/AddNode';
import ViewNode from './Pages/ViewNode';
import Viewwordpress from './Pages/Viewwordpress';
import Addwordpress from './Pages/Addwordpress ';
import AddHTML_CSS from './Pages/AddHTML_CSS';
import ViewHTML_CSS from './Pages/ViewHTML_CSS';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "AddHTML_CSS/:id?",
    element: <AddHTML_CSS/>
  },
  {
    path: "ViewHTML_CSS",
    element: <ViewHTML_CSS/>
  },
  {
    path: "Addwordpress/:id?",
    element: <Addwordpress />
  },
  {
    path: "Viewwordpress",
    element: <Viewwordpress />
  },
  {
    path: "addReact/:id?",
    element: <AddReact />
  },
  {
    path: "viewReact",
    element: <ViewReact />
  },
  {
    path: "add-Node/:id?",
    element: <AddNode />
  },
  {
    path: "view-Node",
    element: <ViewNode />
  },
  {
    path: "add-Javascript/:id?",
    element: <AddJavascript />
  },
  {
    path: "view-Javascript",
    element: <ViewJavascript />
  },
  {
    path: "addteam",
    element: <Addteam />
  },
  {
    path: "viewuser",
    element: <Viewuser />
  },



  {
    path: "viewteam",
    element: <Viewteam />
  },


])
root.render(
  <Context>
    <RouterProvider router={router} />

  </Context>

  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
