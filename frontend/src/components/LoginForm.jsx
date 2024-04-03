import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { voterActions } from "../store/voterSlice.js";
import axios from "axios";
import Error from "./Error.jsx";

const LoginForm = ({ voter, verifier }) => {
  const dispatch = useDispatch();

  const idNumber = useRef();
  const secretWord = useRef();

  const navigate = useNavigate();

  const [err, setErr] = useState(null);
  const [onAuth, setOnAuth] = useState(false);

  const [email, setEmail] = useState("");

  const onSend = async () => {
    try {
      if (voter) {
        const body = {
          idNumber: idNumber.current.value,
        };
        const responseForVoter = await axios.post("/login/voters", body);

        if (responseForVoter.data.status === "ok") {
          setEmail(responseForVoter.data.email);
          setOnAuth(true);
        }
      }

      if (verifier) {
        const body = {
          idNumber: idNumber.current.value,
          verifier: "verifier",
        };
        const response = await axios.post("/login/voters", body);

        if (response.data.status === "ok") {
          setEmail(response.data.email);
          setOnAuth(true);
        }
      }
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const onAuthenticate = async () => {
    try {
      const body = {
        email,
        code: secretWord.current.value,
      };
      const responseForAuth = await axios.post("/login/auth", body);

      dispatch(
        voterActions.setValues({
          email: responseForAuth.data.email,
          idNumber: responseForAuth.data.idNumber,
          voted: responseForAuth.data.voted,
          name: responseForAuth.data.name,
        }),
      );

      if (voter) navigate("/voting");
      if (verifier) navigate("/verifying");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <>
      {err && <Error title={err.error} />}
      <div className="flex flex-col bg-blue-100 p-8 rounded-2xl">
        {!onAuth && (
          <>
            <div className="flex gap-x-4">
              <label htmlFor="id">Enter your id:</label>
              <input ref={idNumber} type="text" id="id" className="p-1" />
            </div>
            <button
              onClick={onSend}
              className="mt-4 border-blue-800 border-2 rounded-2xl hover:bg-blue-800 hover:text-white"
            >
              Send
            </button>
          </>
        )}
        {onAuth && (
          <>
            <div className="flex gap-x-4">
              <label htmlFor="id">Enter the secret word:</label>
              <input ref={secretWord} type="text" id="id" className="p-1" />
            </div>
            <button
              onClick={onAuthenticate}
              className="mt-4 border-blue-800 border-2 rounded-2xl hover:bg-blue-800 hover:text-white"
            >
              Send
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default LoginForm;
