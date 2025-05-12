import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./MainLayout.jsx";
import "./index.css";
import Home from "./Components/Home.jsx";
import Campaigns from "./Components/Campaigns.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import News from "./Components/News.jsx";
import { NewsProvider } from "./Context/NewsContext.jsx"; 
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import Terms from "./Components/Terms.jsx";
import AddCoins from "./Components/AddCoins.jsx";
import { CoinProvider } from "./Context/CoinContext.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>
       },
          {
        path: "/about",
        element: <About/>
       },
          {
        path: "/contact",
        element: <Contact/>
       },
          {
        path: "/news",
        element: <News/>
       },
             {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
       },
             {
        path: "/terms",
        element: <Terms/>
       },
                    {
        path: "/addCoins",
        element: <AddCoins/>
       },
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

  
  <CoinProvider>
<NewsProvider>
<RouterProvider router={router} />

 
</NewsProvider>
  </CoinProvider>




  
);
