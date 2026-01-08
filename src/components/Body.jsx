import { Outlet } from "react-router";

const Body = () => {
  return (
    <div>
      <h1>Body Page </h1>
      <Outlet />
      {/* Outlet component gets filled with 'Child components' based on route path. */}
    </div>
  );
};

export default Body;
