import { createBrowserRouter } from "react-router-dom";
import homeRoute from "../pages/Home/routes";
import technologyRoute from "pages/Technology/routes";
import postRoute from "pages/Post/routes";

const router = createBrowserRouter([
  ...homeRoute,
  ...technologyRoute,
  ...postRoute,
]);

export default router;
