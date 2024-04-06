import Card from "../components/Ui/Card.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error.jsx";

const Verifying = () => {
  const navigate = useNavigate();
  const verifier = useSelector((state) => state.voter);

  const [verify, setVerify] = useState(false);
  const [democrats, setDemocrats] = useState(0);
  const [republicans, setRepublicans] = useState(0);
  const [resultOfCheck, setResultOfCheck] = useState("");
  const [err, setErr] = useState(null);

  const showResults = async () => {
    try {
      const allVotes = await axios.get("voters/votes");
      setDemocrats((allVotes.data.democrates / 26) * 100);
      setRepublicans((allVotes.data.republicans / 26) * 100);
      setVerify(true);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const doVerify = async () => {
    try {
      const check = await axios.post("voters/verify");

      setResultOfCheck(check.data.message);
      console.log(check);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const randomVote = async () => {
    try {
      const random = await axios.post("voters/random");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const toMain = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col mt-10 gap-y-4">
      {err && <Error title={err.message} />}
      <span className="text-xl">Hello {verifier.name}</span>
      {!verify && (
        <div className="flex gap-4">
          <Card onClick={showResults} title={"Show the results"} />
          <Card onClick={randomVote} title={"Random vote"} />
        </div>
      )}
      {verify && (
        <>
          <div className="flex flex-col justify-center align-middle items-center text-xl gap-4 bg-amber-300 rounded-2xl shadow-2xl p-2">
            <span>Results</span>
            <div className="flex gap-4">
              <span>Democrates: {`${democrats} %`}</span>
              <span>Republicans: {`${republicans} %`}</span>
            </div>
          </div>
          {!resultOfCheck && <Card onClick={doVerify} title={"Verify"} />}
          {resultOfCheck && (
            <div className="flex flex-col gap-4 m-4">
              <span>{resultOfCheck}</span>
              <Card onClick={toMain} title={"To main page."} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Verifying;
