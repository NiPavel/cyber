import { useRef, useState } from "react";
import Card from "../components/Ui/Card.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Voting = () => {
  const navigate = useNavigate();
  const voter = useSelector((state) => state.voter);

  const [chosedCity, setChosedCity] = useState(false);
  const vote = useRef();

  const onChoseCity = () => {
    setChosedCity(true);
  };

  const onVote = async () => {
    try {
      const body = {
        email: voter.email,
        idNumber: voter.idNumber,
        vote: vote.current.innerText,
      };

      const requset = await fetch("http://localhost:3000/voters/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await requset.json();

      if (response.status === "success") navigate("/end");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col p-2 m-2">
      <div>
        <label htmlFor="cities">I am in the city: </label>
        <select
          name="cities"
          id="cities"
          className="rounded-2xl border-2 border-blue-200 p-1"
          onChange={onChoseCity}
        >
          <option value=""></option>
          <option value="NewYork">New York</option>
          <option value="Penselvania">Penselvania</option>
          <option value="Chili">Chili</option>
        </select>
      </div>
      {chosedCity && (
        <div className="flex gap-x-8 mt-10">
          <Card onClick={onVote} title={"Republicans"} ref={vote} />
          <Card onClick={onVote} title={"Democrats"} ref={vote} />
        </div>
      )}
    </div>
  );
};

export default Voting;
