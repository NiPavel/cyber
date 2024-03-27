import LoginForm from "../components/LoginForm.jsx";
import NavBar from "../components/NavBar.jsx";

const VoutersLogin = () => {
  return (
    <>
      <NavBar verifier={false} voter={true} />
      <span className="text-xl">Voters Entrance</span>
      <LoginForm voter={true} verifier={false} />
    </>
  );
};

export default VoutersLogin;
