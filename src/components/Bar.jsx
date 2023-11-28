import { Outlet } from "react-router-dom";

function Bar() {
  return (
    <>
      <div>Bar</div>
      <Outlet />
    </>
  );
}

export default Bar;
