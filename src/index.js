import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Context from './Context';
import Viewuser from './Pages/Viewuser';
import AddHTML_CSS from './Pages/HTML or CSS/AddHTML_CSS';
import ViewHTML_CSS from './Pages/HTML or CSS/ViewHTML_CSS';
import ViewJavascript from './Pages/Javascript/ViewJavascript';
import AddJavascript from './Pages/Javascript/AddJavascript';
import ViewReact from './Pages/React/ViewReact';
import AddReact from './Pages/React/AddReact';
import AddNode from './Pages/Node.js/AddNode';
import ViewNode from './Pages/Node.js/ViewNode';
import Viewwordpress from './Pages/wordpress/Viewwordpress';
import Addwordpress from './Pages/wordpress/Addwordpress ';
import Addteam from './Pages/Team/Addteam';
import Viewteam from './Pages/Team/Viewteam';
import AddEnglish from './Pages/English/AddEnglish';
import ViewEnglish from './Pages/English/ViewEnglish';
import Viewlivewebsite from './Pages/Live-website/Viewlivewebsite';
import Addlivewebsite from './Pages/Live-website/Addlivewebsite';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Viewmenka from './Pages/Menka/Viewmenka';
import Addmenka from './Pages/Menka/Addmenka';
import AddNextjs from './Pages/Nextjs/AddNextjs';
import ViewNextjs from './Pages/Nextjs/ViewNextjs';
import AddAWS from './Pages/AWS/AddAWS';
import ViewAWS from './Pages/AWS/ViewAWS';
import ViewTypeScript from './Pages/Typescript/ViewTypeScript';
import AddTypescript from './Pages/Typescript/AddTypescript';


const root = ReactDOM.createRoot(document.getElementById('root'));

function HomeRedirect() {
  const loginData = useSelector(state => state.loginStore.adminDetails);
  if (loginData) {
    return <Navigate to="/dashboard" />;
  }
  return <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRedirect />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  //English
  {
    path: "AddEnglish/:id?",
    element: <AddEnglish />
  },
  {
    path: "ViewEnglish",
    element: <ViewEnglish />
  },
  // html css
  {
    path: "AddHTML_CSS/:id?",
    element: <AddHTML_CSS />
  },
  {
    path: "ViewHTML_CSS",
    element: <ViewHTML_CSS />
  },
  // wordpress
  {
    path: "Addwordpress/:id?",
    element: <Addwordpress />
  },
  {
    path: "Viewwordpress",
    element: <Viewwordpress />
  },
  //react
  {
    path: "addReact/:id?",
    element: <AddReact />
  },
  {
    path: "viewReact",
    element: <ViewReact />
  },
  // node
  {
    path: "add-Node/:id?",
    element: <AddNode />
  },
  {
    path: "view-Node",
    element: <ViewNode />
  },
  // javascript
  {
    path: "add-Javascript/:id?",
    element: <AddJavascript />
  },
  {
    path: "view-Javascript",
    element: <ViewJavascript />
  },
  //  live website

  {
    path: "Add-livewebsite/:id?",
    element: <Addlivewebsite />
  },
  {
    path: "View-livewebsite",
    element: <Viewlivewebsite />
  },
  //menka 
  {
    path: "addmenka/:id?",
    element: <Addmenka/>
  },
  {
    path: "viewmenka",
    element: <Viewmenka/>
  },
    //Nextjs
    {
      path: "addNextjs/:id?",
      element: <AddNextjs/>
    },
    {
      path: "viewNextjs",
      element: <ViewNextjs/>
    },
    //AWS
    {
      path: "addAWS/:id?",
      element: <AddAWS/>
    },
    {
      path: "viewAWS",
      element: <ViewAWS/>
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
  {
    path:"AddTypescript/:id?",
    element:<AddTypescript/>
  },
  { path:"ViewTypescript", 
    element:<ViewTypeScript/> 
  }
  


])
root.render(
  <Context>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </Context>

  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
