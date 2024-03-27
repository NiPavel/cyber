import Card from "../components/Ui/Card.jsx";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="flex w-full justify-center p-10 gap-x-4">
        <Link to={"voutersLogin/"} className="flex">
          <Card title={"Voters Entrance"} />
        </Link>
        <Link to={"verifiersLogin/"} className="">
          <Card title={"Verifiers Entrance"} />
        </Link>
      </div>
    </>
  );
};

export default MainPage;
