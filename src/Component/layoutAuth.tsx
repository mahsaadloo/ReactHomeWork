import * as React from "react";
import { Outlet } from "react-router-dom";

const LayoutAuth: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default LayoutAuth;
