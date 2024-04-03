import { useEffect, useRef, useState } from "react";
import Card from "../components/Ui/Card.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Error from "../components/Error.jsx";

const Voting = () => {
  const navigate = useNavigate();
  const voter = useSelector((state) => state.voter);

  const [chosedCity, setChosedCity] = useState(false);
  const [centers, setCenters] = useState([]);
  const [err, setErr] = useState(null);
  const vote = useRef();

  const onChoseCity = () => {
    setChosedCity(true);
  };

  const getCenters = async () => {
    try {
      const centers = await axios.get("/centers");
      setCenters(centers.data);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const onVote = async () => {
    try {
      const body = {
        email: voter.email,
        idNumber: voter.idNumber,
        vote: vote.current.innerText,
      };

      const response = await axios.post("/voters/vote", body);

      if (response.data.status === "success") navigate("/end");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const toMain = () => {
    navigate("/");
  };

  useEffect(() => {
    const getAllCenters = async () => {
      await getCenters();
    };
    getAllCenters();
  }, []);

  return (
    <>
      {err && <Error title={err.error} />}
      <div className="flex flex-col p-2 m-2">
        {voter.voted && (
          <div className="flex flex-col gap-y-4">
            <span className="text-xl">You have voted already!</span>
            <Card onClick={toMain} title={"To the main page"} />
          </div>
        )}
        {!voter.voted && (
          <div>
            <label htmlFor="cities">I am in the city: </label>
            <select
              name="cities"
              id="cities"
              className="rounded-2xl border-2 border-blue-200 p-1"
              onChange={onChoseCity}
            >
              <option value=""></option>
              {centers.map((center) => (
                <option key={center.placeName} value={`${center.placeName}`}>
                  {center.placeName}
                </option>
              ))}
              <option value="NewYork">New York</option>
              <option value="Penselvania">Penselvania</option>
              <option value="Chili">Chili</option>
            </select>
          </div>
        )}

        {chosedCity && (
          <div className="flex gap-x-8 mt-10">
            <Card onClick={onVote} title={"Republicans"} ref={vote} />
            <Card onClick={onVote} title={"Democrats"} ref={vote} />
          </div>
        )}
      </div>
    </>
  );
};

export default Voting;
