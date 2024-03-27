import LoginForm from "../components/LoginForm.jsx";
import NavBar from "../components/NavBar.jsx";

const VerifiersLogin = () => {
  return (
    <>
      <NavBar voter={false} verifier={true} />
      <span className="text-xl">Verifiers Entrance</span>
      <LoginForm voter={false} verifier={true} />
    </>
  );
};

export default VerifiersLogin;
