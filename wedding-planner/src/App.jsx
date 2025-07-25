// File: src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import E_Invites from "./pages/E_Invites";
import Photo from "./pages/Photo";
import Real_Wedding from "./pages/Real_Wedding";
import Vendors from "./pages/Vendors";
import Venue from "./pages/Venue";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/e-invites", element: <E_Invites /> },
  { path: "/photo", element: <Photo /> },
  { path: "/real-wedding", element: <Real_Wedding /> },
  { path: "/vendors", element: <Vendors /> },
  { path: "/venue", element: <Venue /> },
]);

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}
