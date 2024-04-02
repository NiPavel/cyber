import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { voterActions } from "../store/voterSlice.js";

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
        const responseForVoter = await fetch(
          "http://localhost:3000/login/voters",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          },
        );
        if (!responseForVoter.ok) {
          return responseForVoter.text().then((text) => {
            throw new Error(text);
          });
        }

        const voterRes = await responseForVoter.json();
        if (voterRes.status === "ok") {
          setEmail(voterRes.email);
          setOnAuth(true);
        }
      }

      if (verifier) {
        const body = {
          idNumber: idNumber.current.value,
          verifier: "verifier",
        };
        const response = await fetch("http://localhost:3000/login/voters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        setOnAuth(false);

        const verifierRes = await response.json();
        if (verifierRes.status === "ok") {
          setEmail(verifierRes.email);
          setOnAuth(true);
        }
      }
    } catch (err) {
      console.log(err.error);
      setErr(err);
    }
  };

  const onAuthenticate = async () => {
    try {
      const body = {
        email,
        code: secretWord.current.value,
      };
      const responseForAuth = await fetch("http://localhost:3000/login/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const voterRes = await responseForAuth.json();

      dispatch(
        voterActions.setValues({
          email: voterRes.email,
          idNumber: voterRes.idNumber,
        }),
      );

      if (voter) navigate("/voting");
      if (verifier) navigate("/verifying");
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
  );
};

export default LoginForm;
