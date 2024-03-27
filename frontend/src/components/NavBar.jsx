import Card from "./Ui/Card.jsx";
import { Link } from "react-router-dom";

const NavBar = ({ voter, verifier }) => {
  return (
    <div className="flex flex-row gap-4">
      <Link to={"/"}>
        <Card title={"Main Page"} />
      </Link>
      {verifier && (
        <Link to={"/voutersLogin"}>
          <Card title={"Voters Entrance"} />
        </Link>
      )}
      {voter && (
        <Link to={"/verifiersLogin"}>
          <Card title={"Verifiers Entrance"} />
        </Link>
      )}
    </div>
  );
};

export default NavBar;
