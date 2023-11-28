const ROUTES = import.meta.globEager(`/src/routes/*.jsx`);

export const routeDirectoryContent = Object.entries(ROUTES).map(
  ([key, value]) => ({
    path: key
      .replace("/src/routes", "")
      .replace(".jsx", "")
      .replaceAll(".", "/")
      .replaceAll("$", ":"),
    component: value,
  })
);
