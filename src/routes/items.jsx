import { Outlet } from "react-router-dom";

function ItemsLayout() {
  return (
    <>
      <div>ItemsLayout</div>
      <Outlet />
    </>
  );
}

export async function loader() {
  return { stuff: "stuff" };
}

export async function action() {
  return { stuff: "stuff" };
}

export default ItemsLayout;
