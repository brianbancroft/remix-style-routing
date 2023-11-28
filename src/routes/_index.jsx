import React from "react";

function CoreIndex() {
  return <div>CoreIndex</div>;
}

export async function loader() {
  return { stuff: "stuff" };
}

export default CoreIndex;
