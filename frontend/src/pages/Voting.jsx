import {useState} from "react";
import Card from "../components/Ui/Card.jsx";
import {useNavigate} from "react-router-dom";

const Voting = () => {
  const navigate = useNavigate();

  const [chosedCity, setChosedCity] = useState(false);

  const onChoseCity = () => {
    setChosedCity(true);
  }

  const onVote = () => {
    console.log('voted!');
    navigate("/end");
  }

  return <div className="flex flex-col p-2 m-2">
    <div>
      <label htmlFor="cities">I am in the city: </label>
      <select name="cities" id="cities" className="rounded-2xl border-2 border-blue-200 p-1" onChange={onChoseCity}>
        <option value=""></option>
        <option value="NewYork">New York</option>
        <option value="Penselvania">Penselvania</option>
        <option value="Chili">Chili</option>
      </select>
    </div>
    {chosedCity && <div className="flex gap-x-8 mt-10">
      <Card onClick={onVote} title={"Republicans"}/>
      <Card onClick={onVote} title={"Democrats"}/>
    </div>}

  </div>;
};

export default Voting;
