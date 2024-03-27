import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-4">
      <span className="text-3xl">Voting System</span>
      <Outlet />
    </div>
  );
};

export default MainLayout;
