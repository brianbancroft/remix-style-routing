import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { generateRoutes } from "./lib/generateRoutes";

const routes = generateRoutes({ parent: "/" });
const router = createBrowserRouter(routes);

function Router() {
  return (
    <>
      <div>router</div>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
