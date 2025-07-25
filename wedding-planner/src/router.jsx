import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Vendors from "./pages/Vendors";
import Venue from "./pages/Venue";
import E_Invites from "./pages/E_Invites";
import Real_Wedding from "./pages/Real_Wedding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "vendors", element: <Vendors /> },
      { path: "venue", element: <Venue /> },
      { path: "e-invites", element: <E_Invites /> },
      { path: "real-wedding", element: <Real_Wedding /> },
    ],
  },
]);

export default router;
