import Card from "../components/Ui/Card.jsx";
import {useNavigate} from "react-router-dom";

const End = () => {
    const navigate = useNavigate();

    const toMain = () => {
        navigate("/")
    }
    return <div className="flex flex-col gap-y-2">
        <span className="my-5">Thank you for your vote!</span>
        <Card onClick={toMain} title={"To the main page"}/>
    </div>
}

export default End;