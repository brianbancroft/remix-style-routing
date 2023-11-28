import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Foo from "./components/Foo";
import Bar from "./components/Bar";
import BarBaz from "./components/BarBaz";

const Index = () => <div>Index</div>;

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/foo",
    element: <Foo />,
  },
  {
    path: "/bar",
    element: <Bar />,
    children: [
      {
        path: "/bar/baz",
        element: <BarBaz />,
      },
    ],
  },
];

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
