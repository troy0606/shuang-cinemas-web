import {
  createBrowserRouter,
} from "react-router-dom";

import App from "./App";
import Home from "./features/home"
import Error from "./features/error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
], {
  basename: '/front-stage'
});

export default router;