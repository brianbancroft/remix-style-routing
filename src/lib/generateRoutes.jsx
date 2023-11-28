import React from "react";

import { routeDirectoryContent } from "./routeDirectoryContent";

export function generateRoutes({ parent = "/", depth = 0 }) {
  const generatedRoutes = {};
  // create a regex that looks for the parent element and any following content on a string, and captures the following content
  const regex = new RegExp(`^${parent}((?!.*\\/).*)`);
  // filter the routes that match the regex

  const selectedRoutes = routeDirectoryContent.filter(
    ({ path }) => regex.test(path) && path !== parent
  );

  if (!selectedRoutes.length) return;
  for (let route of selectedRoutes) {
    const Component = route.component.default;

    generatedRoutes[route.path] = {
      path: route.path.replace("_index", ""),
      element: <Component />,
    };

    if (route.component.loader)
      generatedRoutes[route.path].loader = route.component.loader;
    if (route.component.action)
      generatedRoutes[route.path].action = route.component.action;

    const triggerRecursiveCall =
      !/_index/.test(route.path) &&
      routeDirectoryContent.filter(({ path }) => path.indexOf(route.path) === 0)
        .length;

    if (triggerRecursiveCall) {
      generatedRoutes[route.path].children = generateRoutes({
        parent: `${route.path}/`,
        depth: depth + 1,
      });
    }
  }

  return Object.values(generatedRoutes);
}
