import { useParams, Outlet } from "react-router-dom";

function ItemIdPage() {
  const { itemId } = useParams();

  return (
    <>
      <div>ItemIdPage: {itemId}</div>
      <Outlet />
    </>
  );
}

export default ItemIdPage;
